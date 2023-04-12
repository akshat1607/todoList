import Header from "./Components/Header";
import Input from "./Components/Input";
import React, { useState } from "react";
import List from "./Components/List";
import FooterList from "./Components/FooterList";

export const Context = React.createContext();

const initialList = [];
function App() {
  const [list, setList] = useState(initialList);
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState(1);

  const onPressEnter = (latestValue) => {
    setList([...list, { content: latestValue, ischecked: false }]);
    setCount(count + 1);
  };

  const deleteElement = (stringInd) => {
    let index = parseInt(stringInd.slice(1, stringInd.length));
    const arr = [...list];
    if (arr[index].ischecked === false) setCount(count - 1);
    //console.log(index);
    arr.splice(index, 1);
    setList(arr);
    if (index !== arr.length) {
      var element = document.getElementById(stringInd);
      element.checked = arr[index].ischecked;
    }
  };

  const changeHandler = (index, cont) => {
    console.log(index)
    const arr = list;
    console.log(arr[index])
     arr[index].content = cont;
     setList(arr);
    console.log(arr)
  };

  const checkHandler = (stringInd, ischecked) => {
    console.log(stringInd);
    let index = parseInt(stringInd.slice(1, stringInd.length));
    const arr = [...list];
    // debugger
    if (ischecked) {
      setCount(count - 1);
      arr[index].ischecked = true;
    } else {
      setCount(count + 1);
      arr[index].ischecked = false;
    }
    setList(arr);
  };
  var i = -1;

  const modeChanger = (reqMode) => {
    const rMode = parseInt(reqMode.slice(1, reqMode.length));
    if (rMode !== mode) {
      setMode(rMode);
    }
  };

  const clearHandler = () => {
    let arr = [...list];
    for (let i = 0; i < arr.length; i++) {
      arr[i].ischecked = false;
    }
    setCount(arr.length);
    setList(arr);
  };

  const arrowHandler = () => {
    let arr = [...list];
    for (let i = 0; i < arr.length; i++) {
      arr[i].ischecked = true;
    }
    setCount(0);
    setList(arr);
  };
  return (
    <div className="App">
      <Header />
      <Input onPressEnter={onPressEnter} arrowHandler={arrowHandler} />
      {list.map((element) => {
        i = i + 1;
        if (mode === 1) {
          return (
            <List
              key={i}
              content={element.content}
              isChecked={element.ischecked}
              index={i}
              deleteElement={deleteElement}
              changeHandler={changeHandler}
              checkHandler={checkHandler}
            ></List>
          );
        } else if (mode === 2 && element.ischecked === false) {
          return (
            <List
              key={i}
              content={element.content}
              isChecked={element.ischecked}
              index={i}
              deleteElement={deleteElement}
              changeHandler={changeHandler}
              checkHandler={checkHandler}
            ></List>
          );
        } else if (mode === 3 && element.ischecked === true) {
          return (
            <List
              key={i}
              content={element.content}
              isChecked={element.ischecked}
              index={i}
              deleteElement={deleteElement}
              changeHandler={changeHandler}
              checkHandler={checkHandler}
            ></List>
          );
        }
      })}
      {list.length ? (
        <FooterList
          length={list.length}
          count={count}
          modeChanger={modeChanger}
          mode={mode}
          clearHandler={clearHandler}
        ></FooterList>
      ) : (
        console.log("")
      )}
    </div>
  );
}

export default App;
