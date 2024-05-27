import React from "react";
import { useTodoContext } from "./utils/TodoContext";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const state = useTodoContext();

  console.log(state);
  return (
    <View style={styles.container}>
      <Text>TODOS SCREEN</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
