import React from "react";

const style = {
  width: "500px",
  height: "auto",
  backgroundColor: "orange",
  padding: "8px"
};

const red = {
  color: "red"
};

export const InputValue = (props) => {
  const { inputItem, onChangeInput, onClickAdd, isShow } = props;
  return (
    <div style={style}>
      <p>入力</p>
      <input onChange={onChangeInput} value={inputItem} />
      <button onClick={onClickAdd}>追加</button>
      {isShow && <p style={red}>入力してください。</p>}
    </div>
  );
};
