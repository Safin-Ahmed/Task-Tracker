import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import TaskListScreen from "./screens/TaskListScreen";
import { TasksProvider } from "./context/TasksContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TasksProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="TaskList"
            component={TaskListScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TasksProvider>
  );
}
