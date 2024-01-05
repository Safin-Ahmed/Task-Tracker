import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Task Tracker 🔖</Text>
        <Text style={styles.subTitle}>
          A dummy updated app for production developed by Safin
        </Text>

        <Text>Number: {number}</Text>
        <Button onPress={() => setNumber((prev) => prev + 1)}>
          Increment +
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate("TaskList")}
          style={styles.btn}
          color={"tomato"}
          title="Start Tracking"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  subTitle: {
    color: "#fff",
    marginTop: 5,
    fontSize: 14,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
  },
});

export default WelcomeScreen;
