import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useTodoContext } from "./utils/TodoContext";

const Footer = (props) => {
  return (
    <View style={styles.footerContainer}>
      <View style={{ marginLeft: 15 }}>
        <Text style={{ fontWeight: "bold" }}>DATUM: {props.datum}</Text>
      </View>
      <View style={{ marginRight: 15 }}>
        <Button title="Remove" color="red" onPress={props.onPressFn} />
      </View>
    </View>
  );
};

//Route passing params navigation
export default function TodoInfoScreen({ route, navigation }) {
  const { dispatch } = useTodoContext();
  const { id, description, datum, isDone } = route.params;

  function handleRemoveTodoBtn() {
    const todoId = id;
    dispatch({
      type: "REMOVE_TODO",
      payload: todoId,
    });
    navigation.navigate("HomeSC"); //Returning to the Home screen
  }

  function handleTodoIsDone() {
    dispatch({
      type: "IS_DONE_TRUE",
      payload: id,
    });
  }

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 80 }}>
        <Text style={{ fontSize: 40 }}>{description}</Text>
      </View>
      <Button
        title={isDone ? "undone" : "done"}
        color={isDone ? "orange" : "green"}
        onPress={handleTodoIsDone}
      />
      <Footer onPressFn={handleRemoveTodoBtn} datum={datum} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 400,
    height: 60,
    backgroundColor: "#50E8FF",
  },
});
