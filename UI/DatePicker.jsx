import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button, SafeAreaView, StyleSheet } from "react-native";

const DatePicker = ({ value, setValue }) => {
  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate;
    setShowPicker(false);
    setValue(currentDate);
  };

  return (
    <DateTimePicker
      style={styles.datePicker}
      mode="date"
      value={value}
      onDateChange={onChange}
      accentColor="tomato"
      themeVariant="dark"
    />
  );
};

const styles = StyleSheet.create({
  datePicker: {
    transform: `translateX(${"-75px"})`,
    marginTop: 10,
    marginBottom: 15,
  },
});

export default DatePicker;
