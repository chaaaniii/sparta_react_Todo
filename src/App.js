import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import CustomButton from "./components/CustomButton";
import Todo from "./components/Todo";

const App = () => {
  const [lists, setLists] = useState([
    { id: 1, contents: "공부하기", title: "리액트" },
    { id: 2, contents: "공부하기", title: "자바스크립트" },
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
          <p>제목</p>
          <input
            value={title}
            // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>내용</p>
          <input
            value={contents}
            // 인풋 이벤트로 들어온 입력 값을 todo의 값으로 업데이트
            onChange={(e) => setContents(e.target.value)}
          />
        </div>
        <CustomButton color="green" onClick={addlistHandler}>
          추가하기
        </CustomButton>
      </div>
      <h1>Working..🔥</h1>
      <div className="app-style">
        {/* app컴포넌트 안에 있는 list가 map으로 돌면서 list에 대한 정보들을 Props로 넘겨주고 있음. */}
        {lists.map((list) => {
          if (!list.Complete) {
            return (
              <Todo
                handleDelete={deletelistHandler}
                handleComplete={completelistHandler}
                list={list}
                key={list.id} //key값으로 가상돔에서 변화를 알 수 있어 react의 성능이 최적화된다.
              ></Todo>
            );
          } else {
            return null;
          }
        })}
      </div>
      <h1>Done...!!🎉</h1>
      <div className="app-style">
        {/* app컴포넌트 안에 있는 list가 map으로 돌면서 list에 대한 정보들을 Props로 넘겨주고 있음. */}
        {lists.map((list) => {
          if (list.Complete) {
            return (
              <Todo
                handleDelete={deletelistHandler}
                handleComplete={completelistHandler}
                list={list}
                key={list.id} //key값으로 가상돔에서 변화를 알 수 있어 react의 성능이 최적화된다.
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
