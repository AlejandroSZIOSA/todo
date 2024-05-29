import { createContext, useReducer, useContext } from "react";

const TodoContext = createContext(); //1 Create Context + export

//3 Initial state data
const todoList = [
  {
    id: 1,
    title: "title1",
    description: "des2",
    datum: "2024-02-23",
    isDone: false,
  },
  {
    id: 2,
    title: "title2",
    description: "des2",
    datum: "2024-02-24",
    isDone: true,
  },
  {
    id: 3,
    title: "title3",
    description: "des3",
    datum: "2024-02-25",
    isDone: false,
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

    case "EDIT_TODO": {
      const editedQuestionObj = action.payload;
      const id = editedQuestionObj.id;

      return {
        ...state,
        questions: state.questions.map((q) => {
          if (q.id === id) {
            q = editedQuestionObj;
            return q;
          }
          return q;
        }),
      };
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
