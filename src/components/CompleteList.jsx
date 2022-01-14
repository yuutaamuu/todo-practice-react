import React from "react";

const style = {
  width: "500px",
  height: "300px",
  backgroundColor: "pink",
  padding: "8px",
  listStyle: "none"
};

export const CompleteList = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div style={style}>
      <p>完了したTodo</p>
      <ul>
        {completeTodos.map((completeTodo, index) => {
          return (
            <li key={completeTodo}>
              {completeTodo}
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
