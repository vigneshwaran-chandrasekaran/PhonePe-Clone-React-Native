import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import colors from "./app/config/colors";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primaryDark} />
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
});
