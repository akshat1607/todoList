import React from "react";

function list({
  content,
  isChecked,
  index,
  deleteElement,
  changeHandler,
  checkHandler,
}) {
  var listid1 = "i" + String(index);
  console.log("id : " +listid1)
  return (
    <div className="outerList">
      <div className="list">
        
        {isChecked === true ? (
          <>
          <input
          type="checkbox"
          className="checkb"
          id={listid1}
            checked={true}
          onChange={(e) => checkHandler(e.target.id, e.target.checked)}
        ></input>
        
          <p
            contentEditable="true"
            Style="text-decoration : line-through;"
            id={listid1}
            onInput={(e) => {
              console.log(e.currentTarget.textContent);
              changeHandler(
                parseInt(e.target.id.slice(1, e.target.id.length)),
                e.currentTarget.textContent
              );
            }}
          >
            {content}
          </p>
          </>
        ) : (
          <>
          <input
          type="checkbox"
          className="checkb"
          id={listid1}
          
          checked={false}  
          onChange={(e) => checkHandler(e.target.id, e.target.checked)}
        ></input>
          <p
            contentEditable="true"
            Style="text-decoration : none;"
            id={listid1}
            onInput={(e) => {
              console.log(e.currentTarget.textContent);
              changeHandler(
                parseInt(e.target.id.slice(1, e.target.id.length)),
                e.currentTarget.textContent
              );
            }}
          >
            {content}
          </p>
          </>
        )}
        <h3 onClick={(e) => deleteElement(e.target.id)} id={listid1}>
          X
        </h3>
      </div>
    </div>
  );
}

export default list;
