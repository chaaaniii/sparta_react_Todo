import React, { useState } from "react";
import "./App.css"; // ๐ฅ ๋ฐ๋์ App.css ํ์ผ์ import ํด์ค์ผ ํฉ๋๋ค.
import CustomButton from "./components/CustomButton";
import Todo from "./components/Todo";

const App = () => {
  const [lists, setLists] = useState([
    { id: 1, contents: "๊ณต๋ถํ๊ธฐ", title: "๋ฆฌ์กํธ" },
    { id: 2, contents: "๊ณต๋ถํ๊ธฐ", title: "์๋ฐ์คํฌ๋ฆฝํธ" },
  ]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const addlistHandler = () => {
    const newList = {
      id: lists.length + 1,
      contents: contents,
      title: title,
    };
    setLists([...lists, newList]);
  };
  const deletelistHandler = (id) => {
    const newTodoList = lists.filter((list) => list.id !== id);
    setLists(newTodoList);
  };
  const completelistHandler = (id) => {
    const newTodoList = lists.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          Complete: !list.Complete,
        };
      } else {
        return { ...list };
      }
    });
    setLists(newTodoList);
  };
  return (
    <div>
      <div className="Top-bar">
        <p>My Todo List</p>
        <p>React</p>
      </div>
      <div className="Input-bar">
        <div className="Input-box">
          <p>์ ๋ชฉ</p>
          <input
            value={title}
            // ์ธํ ์ด๋ฒคํธ๋ก ๋ค์ด์จ ์๋ ฅ ๊ฐ์ name์ ๊ฐ์ผ๋ก ์๋ฐ์ดํธ
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>๋ด์ฉ</p>
          <input
            value={contents}
            // ์ธํ ์ด๋ฒคํธ๋ก ๋ค์ด์จ ์๋ ฅ ๊ฐ์ todo์ ๊ฐ์ผ๋ก ์๋ฐ์ดํธ
            onChange={(e) => setContents(e.target.value)}
          />
        </div>
        <CustomButton color="green" onClick={addlistHandler}>
          ์ถ๊ฐํ๊ธฐ
        </CustomButton>
      </div>
      <h1>Working..๐ฅ</h1>
      <div className="app-style">
        {/* app์ปดํฌ๋ํธ ์์ ์๋ list๊ฐ map์ผ๋ก ๋๋ฉด์ list์ ๋ํ ์ ๋ณด๋ค์ Props๋ก ๋๊ฒจ์ฃผ๊ณ  ์์. */}
        {lists.map((list) => {
          if (!list.Complete) {
            return (
              <Todo
                handleDelete={deletelistHandler}
                handleComplete={completelistHandler}
                list={list}
                key={list.id} //key๊ฐ์ผ๋ก ๊ฐ์๋์์ ๋ณํ๋ฅผ ์ ์ ์์ด react์ ์ฑ๋ฅ์ด ์ต์ ํ๋๋ค.
              ></Todo>
            );
          } else {
            return null;
          }
        })}
      </div>
      <h1>Done...!!๐</h1>
      <div className="app-style">
        {/* app์ปดํฌ๋ํธ ์์ ์๋ list๊ฐ map์ผ๋ก ๋๋ฉด์ list์ ๋ํ ์ ๋ณด๋ค์ Props๋ก ๋๊ฒจ์ฃผ๊ณ  ์์. */}
        {lists.map((list) => {
          if (list.Complete) {
            return (
              <Todo
                handleDelete={deletelistHandler}
                handleComplete={completelistHandler}
                list={list}
                key={list.id} //key๊ฐ์ผ๋ก ๊ฐ์๋์์ ๋ณํ๋ฅผ ์ ์ ์์ด react์ ์ฑ๋ฅ์ด ์ต์ ํ๋๋ค.
              ></Todo>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default App;
