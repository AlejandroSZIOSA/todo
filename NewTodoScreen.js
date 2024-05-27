import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NewTodoScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Title</Text>
      </View>
      <View>
        <Text>Description</Text>
      </View>
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
