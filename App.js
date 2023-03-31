import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FitnessContext } from "./Context";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import { LogBox } from 'react-native';

export default function App() {
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  ) ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
