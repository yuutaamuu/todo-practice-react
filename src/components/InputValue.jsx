import React from "react";

const style = {
  width: "500px",
  height: "auto",
  backgroundColor: "orange",
  padding: "8px"
};

export const InputValue = (props) => {
  const { inputItem, onChangeInput, onClickAdd } = props;
  return (
    <div style={style}>
      <p>入力</p>
      <input onChange={onChangeInput} value={inputItem} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
