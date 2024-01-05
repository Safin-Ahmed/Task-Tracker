import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import TaskListScreen from "./screens/TaskListScreen";
import { TasksProvider } from "./context/TasksContext";

import * as Updates from "expo-updates";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

async function onFetchUpdateAsync() {
  try {
    const update = await Updates.checkForUpdateAsync();

    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  } catch (error) {
    alert(`Error fetching latest Expo update: ${error}`);
  }
}

export default function App() {
  useEffect(() => {
    onFetchUpdateAsync();
  }, []);

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
