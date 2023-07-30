// import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";
// import Todo from "./models/todo";

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);

  //   setTodos(prevTodos => {
  //     return prevTodos.concat(newTodo)
  //   });
  // };

  // const removeTodoHangler = (id: string) => {
  //   setTodos(prevTodos => {
  //     return prevTodos.filter(todo => todo.id !== id);
  //   })
  // }

  // return (
  //   <div>
  //     <NewTodo onAddTodo={addTodoHandler}/>
  //     <Todos items={todos} onRemoveTodo={removeTodoHangler} />
  //   </div>
  // );

  return <TodosContextProvider>
    <NewTodo />
    <Todos />
  </TodosContextProvider>
}

export default App;
