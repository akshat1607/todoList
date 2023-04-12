import React from "react";
import "./FooterList.css";

function FooterList({ length, count, modeChanger, mode, clearHandler }) {
  return (
    <div className="Footerlist">
      <div className="itemcount">{count} items left</div>
      {mode === 1 ? (
        <button
          className="btn"
          id="i1"
          onClick={(e) => modeChanger(e.target.id)}
          Style="border-width:1px ;border-color: rgba(175, 47, 47, 0.2);"
        >
          All
        </button>
      ) : (
        <button
          className="btn"
          id="i1"
          onClick={(e) => modeChanger(e.target.id)}
        >
          All
        </button>
      )}

      {mode === 2 ? (
        <button
          className="btn"
          id="i2"
          onClick={(e) => modeChanger(e.target.id)}
          Style="border-width:1px ;border-color: rgba(175, 47, 47, 0.2);"
        >
          Active
        </button>
      ) : (
        <button
          className="btn"
          id="i2"
          onClick={(e) => modeChanger(e.target.id)}
        >
          Active
        </button>
      )}

      {mode === 3 ? (
        <button
          className="btn"
          id="i3"
          onClick={(e) => modeChanger(e.target.id)}
          Style="border-width:1px; border-color: rgba(175, 47, 47, 0.2);"
        >
          Completed
        </button>
      ) : (
        <button
          className="btn"
          id="i3"
          onClick={(e) => modeChanger(e.target.id)}
        >
          Completed
        </button>
      )}
      {length - count > 0 ? (
        <button className="btn clr" onClick={() => clearHandler()}>
          Clear Completed
        </button>
      ) : (
        console.log("")
      )}
    </div>
  );
}

export default FooterList;
