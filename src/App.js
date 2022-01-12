import React, { useState } from "react";
import { InputValue } from "./components/InputValue";
import { TodoList } from "./components/TodoList";

export const App = () => {
  const [inputItem, setInputItem] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeInput = (e) => {
    return setInputItem(e.target.value);
  };
  const onClickAdd = () => {
    if (inputItem === "") return;
    const IncompleteTodos = [...todos, inputItem];
    setTodos(IncompleteTodos);
    setInputItem("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <>
      <InputValue
        inputItem={inputItem}
        onClickAdd={onClickAdd}
        onChangeInput={onChangeInput}
      />
      <TodoList todos={todos} onClickDelete={onClickDelete} />
    </>
  );
};
