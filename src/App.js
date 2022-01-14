import React, { useState } from "react";
import { InputValue } from "./components/InputValue";
import { TodoList } from "./components/TodoList";
import { CompleteList } from "./components/CompleteList";

export const App = () => {
  //data類
  const [inputItem, setInputItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [isShow, setIsShow] = useState(true);

  //関数
  const onChangeInput = (e) => {
    setInputItem(e.target.value);
    console.log(e.target.value);

    if (e.target.value) {
      setIsShow(false);
    } else if (!e.target.value) {
      setIsShow(true);
    }
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
        isShow={isShow}
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
