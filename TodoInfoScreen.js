import React from "react";
import { View, Text, StyleSheet } from "react-native";

//Route passing params navigation
export default function TodoInfoScreen({ route }) {
  const id = route.params;
  return (
    <View style={styles.container}>
      <Text>TODO INFO SCREEN</Text>
      <Text>{id}</Text>
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
