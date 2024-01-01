import { useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
} from "react-native";
import DatePicker from "../UI/DatePicker";
import { useTasks } from "../context/TasksContext";

const TaskForm = ({ setModalVisible = null }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());

  const { createTask } = useTasks();

  const handleSubmit = () => {
    const newTask = {
      id: uuidv4(),
      title,
      due: date,
      status: "pending",
    };

    createTask(newTask);
    setTitle("");
    if (setModalVisible) {
      setModalVisible(false);
    }
  };

  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        borderRadius: 50,
      }}
    >
      <TextInput
        placeholder="Title"
        placeholderTextColor="#ddd"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <DatePicker value={date} setValue={setDate} />
      <Pressable onPress={handleSubmit} style={styles.btn}>
        <Text style={styles.text}>Finish</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    color: "#fff",
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },

  btn: {
    backgroundColor: "tomato",
    padding: 10,
    width: "50%",
    margin: "auto",
    textAlign: "center",
    elevation: 2,
    borderRadius: 15,
  },

  text: { color: "#fff", textAlign: "center" },
});

export default TaskForm;
