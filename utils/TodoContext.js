import { createContext, useReducer, useContext } from "react";

const TodoContext = createContext(); //1 Create Context + export

//3 Initial state data
const todoList = [
  {
    id: 1,
    title: "Title1",
    description: "description_1",
    datum: "2024-02-23 /10:30",
    isDone: false,
  },
  {
    id: 2,
    title: "Title2",
    description: "description_2",
    datum: "2024-02-24 /10:31",
    isDone: true,
  },
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

    case "IS_DONE_TRUE": {
      const todoId = action.payload;
      return state.map((t) => {
        if (t.id === todoId) {
          t.isDone = true;
          return t;
        }
        return t;
      });
    }

    case "IS_DONE_FALSE": {
      const todoId = action.payload;
      return state.map((t) => {
        if (t.id === todoId) {
          t.isDone = false;
          return t;
        }
        return t;
      });
    }
    default:
      return state;
  }
}

//2 Create provider
export function TodoProvider({ children }) {
  //4 Reducer
  const [stateTodoList, dispatch] = useReducer(todosReducer, todoList);

  return (
    <TodoContext.Provider value={{ stateTodoList, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
//7 comprimiendo el código aun mas
export const useTodoContext = () => useContext(TodoContext);
