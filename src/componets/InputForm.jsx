import React, { useContext, useState } from "react";
import todoContext from "../store";
import "./InputForm.css";
export default function InputForm() {
  const ctx = useContext(todoContext);
  const [text, setText] = useState("");
  const inputHandler = (e) => {
    setText(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!text) return;
    ctx.addTodo({
      id: ctx.count,
      text,
    });
    ctx.increaseCount();

    setText("");
  };
  return (
    <form action="" onSubmit={formSubmitHandler}>
      <input type="text" value={text} onChange={inputHandler} />
      <button type="submit">Add Todo</button>
    </form>
  );
}
