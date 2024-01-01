import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Modal,
  Pressable,
  Text,
  StatusBar,
  TextInput,
} from "react-native";
import Task from "../components/Task";
import { useTasks } from "../context/TasksContext";
import { useState } from "react";
import TaskForm from "../components/TaskForm";

const TaskList = () => {
  const { tasks } = useTasks();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskList}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add new task</Text>
            <TaskForm />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Button
        onPress={() => setModalVisible(true)}
        color="tomato"
        title="Add Task +"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  taskList: {
    display: "flex",
    gap: 10,
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "space-between",
    paddingTop: StatusBar.currentHeight,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default TaskList;
