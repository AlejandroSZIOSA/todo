import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import TodoItem from "./components/TodoItem";

const DATA_TEST = [
  {
    id: 1,
    title: "First Item",
  },
  {
    id: 2,
    title: "Second Item",
  },
  {
    id: 3,
    title: "Third Item",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>TODOS</Text>
      <ScrollView>
        <FlatList
          data={DATA_TEST}
          renderItem={({ item }) => <TodoItem itemObj={item} />}
          keyExtractor={(item) => item.id}
          style={styles.listContainer}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "top",
    alignItems: "center",
  },
  listContainer: {
    width: 360,
    height: 650,
    backgroundColor: "yellow",
  },
});
