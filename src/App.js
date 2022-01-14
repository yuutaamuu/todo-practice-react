import React, { useState } from "react";
import { InputValue } from "./components/InputValue";
import { TodoList } from "./components/TodoList";
import { CompleteList } from "./components/CompleteList";

export const App = () => {
  const [inputItem, setInputItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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
  const onClickComplete = (index) => {
    onClickDelete(index);
    const newCompleteTodos = [...completeTodos, todos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncomplete = [...todos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setTodos(newIncomplete);
  };

  return (
    <>
      <InputValue
        inputItem={inputItem}
        onClickAdd={onClickAdd}
        onChangeInput={onChangeInput}
      />
      <TodoList
        todos={todos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteList completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
