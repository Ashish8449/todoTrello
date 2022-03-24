import React, { useContext, useState } from "react";
import ListItem from "./ListItem";
import "./TodoItem.css";
import { useDrop } from "react-dnd";
import todoContext from "../store";

export default function TodoItem(props) {
  const { type, bg } = props;

  const ctx = useContext(todoContext);

  // drag and drop

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "todoItem",
      drop: (item) => {
        console.log(ctx.todo);
        additemTodo(item);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [ctx.todo]
  );
 

  // this function will run when we drag items
  const additemTodo = (item) => {
    console.log("add", ctx.todo);
    const { id, text } = item;
    const from = item.type;
    ctx.dragAndDrop(
      from,
      type,
      {
        id,
        text,
      },
      ctx.todo
    );
  };
  console.log("39", ctx.todo);
  let renderList = "";
  if (type === "ToDo") {
    console.log("41", ctx.todo);
    renderList = ctx.todo.map((ele) => {
      return <ListItem key={ele.id} id={ele.id} text={ele.text} type="ToDo" />;
    });
  } else if (type === "In Progress") {
    renderList = ctx.progress.map((ele) => {
      return (
        <ListItem key={ele.id} id={ele.id} text={ele.text} type="In Progress" />
      );
    });
  } else {
    renderList = ctx.completed.map((ele) => {
      return (
        <ListItem key={ele.id} id={ele.id} text={ele.text} type="Completed" />
      );
    });
  }

  return (
    <div className="todoitem">
      <div
        className="todoitemType"
        style={{
          background: { bg },
        }}
      >
        {type}{" "}
      </div>
      <ul
        ref={drop}
        style={{
          background: isOver ? "#bad3ff" : "transparent",
        }}
      >
        {renderList}
      </ul>
    </div>
  );
}
