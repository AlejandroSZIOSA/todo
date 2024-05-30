import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

//Using Navigation as prop
export default function TodoItem({ itemObj, nav }) {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 6 }}>
        <TouchableOpacity onPress={() => nav.navigate("TodoInfoSC", itemObj)}>
          <Text style={{ fontSize: 23 }}>{itemObj.title}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginRight: 6 }}>
        <Button
          title=">"
          color="#841584"
          onPress={() => nav.navigate("TodoInfoSC", itemObj)}
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
