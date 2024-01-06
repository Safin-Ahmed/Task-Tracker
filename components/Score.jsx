import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Score = () => {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Updated Score: {number}</Text>
      <Button
        onPress={() => setNumber(number + 1)}
        color={"dodgerblue"}
        title="Start Increasing"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    marginTop: 60,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
});

export default Score;
