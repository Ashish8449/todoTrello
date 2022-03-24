import React from "react";
import TodoItem from "./TodoItem";
import "./TodoBox.css";

export default function TodoBox() {
  return (
    <div className="todoBox">
      <TodoItem type={"ToDo"} />
      <TodoItem type={"In Progress"} />
      <TodoItem type={"Completed"} />
    </div>
  );
}
