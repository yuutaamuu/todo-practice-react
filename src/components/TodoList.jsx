import React from "react";

const style = {
  width: "500px",
  height: "300px",
  backgroundColor: "lime",
  padding: "8px",
  listStyle: "none"
};

export const TodoList = (props) => {
  const { todos, onClickDelete } = props;
  return (
    <div style={style}>
      <p>Todoリスト</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              {todo}
              <button onClick={() => onClickDelete(index)}>完了</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
