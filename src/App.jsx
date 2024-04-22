import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
function App() {
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      task: "watch the knicks",
      priority: "high",
      isComplete: false,
    },
    {
      id: crypto.randomUUID(),
      task: "watch differnt basketball",
      priority: "low",
      isComplete: false,
    },
    {
      id: crypto.randomUUID(),
      task: "feed cats",
      priority: "high",
      isComplete: false,
    },
  ]);
  const addTodo = (todoObj) => {
    todoObj.id = crypto.randomUUID();
    todoObj.isComplete = false;
    setTodos([...todos, todoObj]);
  };

  const toggleCompleteTodo = (id) => {
    const todosCopy = [...todos];
    const updatedTodos = todosCopy.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const editTodo = (id, todoObj) => {
    const todosCopy = [...todos];
    const updatedTodos = todosCopy.map((todo) => {
      if (todo.id === id) {
        todo = {
          ...todo,
          task: todoObj.task,
          priority: todoObj.priority,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => id !== todo.id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Todos for Today</h1>
      <h2>Add a newTodo</h2>
      <TodoForm addTodo={addTodo} />
      {todos.length ? (
        <>
        <h2>All current Todos:</h2>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              task={todo.task}
              priority={todo.priority}
              id={todo.id}
              isComplete={todo.isComplete}
              toggleComplete={toggleCompleteTodo}
              edit={editTodo}
              delete={deleteTodo}
            />
          ))}
        </>
      ) : (
        <h2>All tasks complete</h2>
      )}
    </>
  );
}

export default App;
