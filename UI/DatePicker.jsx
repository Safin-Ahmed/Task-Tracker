import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StyleSheet } from "react-native";

const DatePicker = ({ value, setValue }) => {
  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate;
    setValue(currentDate);
  };

  return (
    <>
      <DateTimePicker
        style={styles.datePicker}
        mode="date"
        value={value}
        onChange={onChange}
        accentColor="tomato"
        themeVariant="dark"
      />
    </>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    marginTop: 10,
    marginBottom: 15,
  },
});

export default DatePicker;
