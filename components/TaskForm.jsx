import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import DatePicker from "../UI/DatePicker";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  return (
    <View style={{ width: "100%" }}>
      <TextInput
        placeholder="Title"
        placeholderTextColor="#ddd"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <DatePicker value={date} setValue={setDate} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    color: "#000",
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
});

export default TaskForm;
