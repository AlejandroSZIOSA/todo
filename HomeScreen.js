import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import TodoItem from "./components/TodoItem";
import { useTodoContext } from "./utils/TodoContext";

export default function HomeScreen({ navigation }) {
  const { stateTodoList } = useTodoContext(); //CONTEXT

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={stateTodoList}
          renderItem={({ item }) => (
            <TodoItem itemObj={item} nav={navigation} />
          )}
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
    marginTop: 20,
  },
  listContainer: {
    width: 360,
    height: 680,
    backgroundColor: "#00E78F",
  },
});
