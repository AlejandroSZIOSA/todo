import { createContext, useReducer, useContext } from "react";

const TodoContext = createContext(); //1 Create Context + export

//3 Initial state data
const todoList = [
  {
    id: 1,
    title: "title1",
    description: "des2",
    isDone: false,
  },
  { id: 2, title: "title2", description: "des3", isDone: false },
];

//5 reducer function
function todosReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = action.payload;
      return [...state, newTodo];

    case "REMOVE_TODO": {
      const todoId = action.payload;
      return state.filter((todo) => todo.id !== todoId);
    }
    default:
      return state;
  }
}

//2 Create provider
export function TodoProvider({ children }) {
  //4 Reducer
  const [state, dispatch] = useReducer(todosReducer, todoList);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
//7 comprimiendo el código aun mas
export const useTodoContext = () => useContext(TodoContext);
