import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//Using Navigation as prop
export default function TodoItem({ itemObj, nav }) {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 5 }}>
        <Text style={{ fontSize: 23 }}>{itemObj.title}</Text>
      </View>
      <View style={{ paddingHorizontal: 5 }}>
        <Button
          title=">"
          color="#841584"
          onPress={() => nav.navigate("TodoInfoSC", itemObj.id)}
        />
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
