import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function TodoItem({ itemObj }) {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 5 }}>
        <Text style={{ fontSize: 23 }}>{itemObj.title}</Text>
      </View>
      <View style={{ paddingHorizontal: 5 }}>
        <Button title=">" color="#841584" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#111111",
    paddingVertical: 10,
    justifyContent: "space-between",
  },
});
