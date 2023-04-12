import React from "react";
import "./Input.css";

function Input({ onPressEnter, arrowHandler }) {
  const onKeyDown = (e) => {
    if (e.code === "Enter") {
      if (e.target.value) {
        onPressEnter(e.target.value);
        e.target.value = "";
      }
      e.stopPropagation();
      e.preventDefault();
    }
  };

  return (
    <div className="todoInput">
      <p className="arrowp">
        <i class="arrow down" onClick={()=>arrowHandler()}></i>
      </p>
      <input
        type="text"
        placeholder="What needs to be done"
        onKeyDown={onKeyDown}
        onClick="input.blur()"
      ></input>
    </div>
  );
}

export default Input;
