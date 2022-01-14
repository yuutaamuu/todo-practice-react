import React from "react";

const style = {
  width: "500px",
  height: "300px",
  backgroundColor: "lime",
  padding: "8px",
  listStyle: "none"
};

export const TodoList = (props) => {
  const { todos, onClickDelete, onClickComplete } = props;
  return (
    <div style={style}>
      <p>Todoリスト</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              {todo}
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
