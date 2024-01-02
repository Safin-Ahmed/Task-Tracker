import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import CheckBox from "expo-checkbox";
import { useTasks } from "../context/TasksContext";
import { formatDate } from "../utils/date";

let isInitialRender = true;
const Task = ({ task }) => {
  const [isChecked, setIsChecked] = useState(task.status === "Finished");

  const { updateTask, deleteTask } = useTasks();

  useEffect(() => {
    if (isInitialRender) {
      isInitialRender = false;
      return;
    }

    const updatedTask = {
      ...task,
      status: isChecked ? "Finished" : "Pending",
    };

    updateTask(updatedTask);
  }, [isChecked]);
  return (
    <View style={[styles.taskContainer]}>
      <CheckBox value={isChecked} onValueChange={setIsChecked} />
      <Text style={[styles.taskText, isChecked && styles.checkedContainer]}>
        {task.title}
      </Text>
      <Text style={styles.taskText}>{formatDate(task.due)}</Text>
      <Text
        style={[
          styles.taskText,
          styles.taskStatus,
          {
            backgroundColor: task.status === "Pending" ? "red" : "green",
          },
        ]}
      >
        {task.status}
      </Text>
      <Button onPress={() => deleteTask(task.id)} color="red" title="X" />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#000",
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 50,
    backgroundColor: "#111111",
    boxShadow: `20px 20px 60px #181818,
             -20px -20px 60px #202020`,
  },

  checkedContainer: {
    textDecorationLine: "line-through",
    textDecorationColor: "red",
    textDecorationStyle: "double",
  },

  taskText: {
    color: "#fff",
  },

  taskStatus: {
    padding: 5,
    textAlign: "center",
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 12,
  },
});

export default Task;
