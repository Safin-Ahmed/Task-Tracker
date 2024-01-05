import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Score from "../components/Score";

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Task Tracker 🔖</Text>
          <Text style={styles.subTitle}>
            A dummy updated app v2 for production developed by Safin
          </Text>
        </View>

        <Score />

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate("TaskList")}
            color={"tomato"}
            title="Start Tracking"
          />
        </View>
      </View>
    </>
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
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
  },
});

export default WelcomeScreen;
