import React, { useState } from "react";

const todoContext = React.createContext({
  todo: [],
  progress: [],
  completed: [],
  addTodo: () => {},
  todoProgress: () => {},
  count: 0,
  increaseCount: () => {},
  dragAndDrop: () => {},
});

export const TodoProvider = (props) => {
  const [count, setCount] = useState(1);
  const [todo, setTodo] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const todoProgress = () => {};
  const increaseCount = () => {
    setCount(count + 1);
  };
  const addTodo = (item) => {
    setTodo((todo) => [...todo, item]);
    console.log("add", todo);
  };

  const dragAndDrop = (from, where, item, todo) => {  
    if (from === "ToDo" && where === "In Progress") {
      setTodo(todo.filter((ele) => ele.id !== item.id));
      setProgress([...progress, item]);
    } else if (from === "ToDo" && where === "Completed") {
      setTodo(todo.filter((ele) => ele.id !== item.id));
      setCompleted([...completed, item]);
    } else if (from === "In Progress" && where === "ToDo") {
      setTodo([...todo, item]);
      setProgress(progress.filter((ele) => ele.id !== item.id));
    } else if (from === "In Progress" && where === "Completed") {
      setCompleted([...completed, item]);
      setProgress(progress.filter((ele) => ele.id !== item.id));
    } else if (from === "Completed" && where === "ToDo") {
      setCompleted(completed.filter((ele) => ele.id !== item.id));
      setTodo([...todo, item]);
    } else if (from === "Completed" && where === "In Progress") {
      setCompleted(completed.filter((ele) => ele.id !== item.id));
      setProgress([...progress, item]);
    }
  };

  return (
    <todoContext.Provider
      value={{
        todo,
        progress,
        completed,
        addTodo,
        todoProgress,
        count,
        increaseCount,
        dragAndDrop,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
};

export default todoContext;
