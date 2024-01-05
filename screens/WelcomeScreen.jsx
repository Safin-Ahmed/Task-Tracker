import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Task Tracker 🔖</Text>
        <Text style={styles.subTitle}>
          A dummy updated app v2 for production developed by Safin
        </Text>
        <Text style={styles.subTitle}>Score: {number}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate("TaskList")}
          color={"tomato"}
          title="Start Tracking"
        />

        <Button
          onPress={() => setNumber(number + 1)}
          color={"dodgerblue"}
          title="Start Increasing"
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
    marginTop: 15,
    fontSize: 14,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
  },
});

export default WelcomeScreen;
