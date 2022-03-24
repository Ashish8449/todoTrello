import React from "react";
import "./ListItem.css";
import { useDrag } from "react-dnd";

export default function ListItem(props) {
  const { text, id, type } = props;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "todoItem",
    item: { text, id, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <li
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {text}
    </li>
  );
}
