import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewTodoScreen from "./NewTodoScreen";
import HomeScreen from "./HomeScreen";
import TodoInfoScreen from "./TodoInfoScreen";
import { TodoProvider } from "./utils/TodoContext"; //CONTEXT

//3 -Nav
const Stack = createNativeStackNavigator();

//2 Nav
export default function App() {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeSC">
          <Stack.Screen
            name="HomeSC"
            component={HomeScreen}
            options={({ navigation }) => ({
              title: "TODO LIST",
              headerStyle: {
                backgroundColor: "#00D382",
              },
              headerTintColor: "#FFFFFF",
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: "bold",
              },
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate("NewTodoSC")}
                  title="Add"
                />
              ),
            })}
          />

          <Stack.Screen
            name="NewTodoSC"
            component={NewTodoScreen}
            options={({ navigation }) => ({
              title: "NEW TODO",
              headerStyle: {
                backgroundColor: "#00D382",
              },
              headerTintColor: "#FFFFFF",
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: "bold",
              },

              /*   headerRight: () => (
                <Button
                  onPress={() => navigation.navigate("HomeSC")}
                  title="DONE"
                />
              ), */
            })}
          />

          <Stack.Screen
            name="TodoInfoSC"
            component={TodoInfoScreen}
            options={({ navigation, route }) => ({
              title: route.params.title,
              headerStyle: {
                backgroundColor: "#00D382",
              },
              headerTintColor: "#FFFFFF",
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: "bold",
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
}
