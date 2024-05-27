import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TodoInfoScreen() {
  return (
    <View style={styles.container}>
      <Text>TODO INFO SCREEN</Text>
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
