import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default function NewTodoScreen() {
  const [titleInput, setTitleInput] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <TextInput
            style={styles.title}
            placeholder="Title"
            maxLength={28}
            onChangeText={(titleInput) => setTitleInput(titleInput)}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text>Description</Text>
        </View>
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

  innerContainer: {
    flex: 0,
    flexDirection: "column",
    gap: 15,
  },

  titleContainer: {
    width: 350,
    borderColor: "#111111",
    borderWidth: 2,
  },

  title: {
    fontSize: 25,
  },

  descriptionContainer: {
    width: 350,
    height: 200,
    borderColor: "#111111",
    borderWidth: 2,
    padding: 10, //problem
  },

  description: {
    fontSize: 25,
  },
});
