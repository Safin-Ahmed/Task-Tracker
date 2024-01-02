import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  Pressable,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableWithoutFeedback,
} from "react-native";
import { formatDate } from "../utils/date";

const DatePickerAndroid = ({ value, setValue }) => {
  const [showPicker, setShowPicker] = useState(false);
  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate;
    console.log("On Change Handler");
    setShowPicker((prev) => !prev);
    setValue(currentDate);
  };

  return (
    <>
      <Pressable
        style={styles.inputContainer}
        onPress={() => setShowPicker(true)}
      >
        <TextInput
          editable={false}
          style={styles.input}
          value={formatDate(value)}
        />
      </Pressable>

      {showPicker && (
        <DateTimePicker
          style={styles.datePicker}
          mode="date"
          value={value}
          onChange={onChange}
          accentColor="tomato"
          themeVariant="dark"
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 25,
  },
  input: {
    width: "100%",
    color: "#fff",
  },
  datePicker: {
    marginTop: 10,
    marginBottom: 15,
  },
});

export default DatePickerAndroid;
