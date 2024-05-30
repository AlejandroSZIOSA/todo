import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import { useState } from "react";
import { useTodoContext } from "./utils/TodoContext";

export default function NewTodoScreen({ navigation }) {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [message, setMessage] = useState("");

  const { stateTodoList, dispatch } = useTodoContext();

  function getLatestTodoId() {
    let lastTodo = stateTodoList[stateTodoList.length - 1];
    return lastTodo.id;
  }

  function generateDateStamp() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} / ${hours}:${minutes}`;
  }

  function createNewTodo() {
    let lastTodoId = getLatestTodoId();
    const newUnikeId = lastTodoId + 1; //generate unique ID
    const date = generateDateStamp();
    const newTodo = {
      id: newUnikeId,
      title: titleInput,
      description: descriptionInput,
      datum: date,
      isDone: false,
    };
    return newTodo;
  }

  function handleAddTodo() {
    const isTitleInputEmpty = !titleInput ? true : false;
    const isDescriptionInputEmpty = !descriptionInput ? true : false;

    if (!isTitleInputEmpty && !isDescriptionInputEmpty) {
      setMessage("");
      const newTodoObj = createNewTodo();
      dispatch({
        type: "ADD_TODO",
        payload: newTodoObj,
      });
      navigation.navigate("HomeSC");
    } else {
      setMessage("Error Inputs");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <TextInput
            style={{ fontSize: 25 }}
            placeholder="Todo Title"
            maxLength={28}
            onChangeText={(titleInput) => setTitleInput(titleInput)}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            style={{ fontSize: 25 }}
            placeholder="Description"
            maxLength={100}
            onChangeText={(descriptionInput) =>
              setDescriptionInput(descriptionInput)
            }
          />
        </View>
        <View style={{ width: 120 }}>
          <Button title="add" onPress={handleAddTodo} />
        </View>
        <Text style={{ fontSize: 18 }}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
  },
  innerContainer: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },
  titleContainer: {
    width: 350,
    borderColor: "#111111",
    borderWidth: 2,
  },
  descriptionContainer: {
    width: 350,
    height: 150,
    borderColor: "#111111",
    borderWidth: 2,
    padding: 10, //problem
  },
});
