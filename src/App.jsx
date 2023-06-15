import React, { useState } from "react";
import "./App.css";

function App() {
  const id = Math.random();
  const [work, setWork] = useState([
    { id: id, title: "리액트 공부하기", comment: "리액트 기초를 공부해봅시다" },
  ]);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const commentChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const clickAddButtonHandler = (event) => {
    event.preventDefault();
    const newWork = {
      id,
      title,
      comment,
    };
    //배열유지
    setWork([...work, newWork]);
    setTitle("");
    setComment("");
  };

  const clickRemoveButtonHandler = (id) => {
    const newWorks = work.filter((work) => work.id !== id);
    setWork(newWorks);
  };

  const clickCompleteButtonHandler = (id) => {
    const completeWorks = work.filter((work) => work.id !== id);
    const completeDoneWorks = work.filter((work) => work.id === id);

    setWork(completeWorks);
    setDoneWorks([...doneWorks, ...completeDoneWorks]);
  };

  const [doneWorks, setDoneWorks] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      comment: "리액트 기초를 공부해봅시다",
    },
  ]);

  const clickDoneRemoveButtonHandler = (id) => {
    const newDoneWorks = doneWorks.filter((donePlan) => donePlan.id !== id);
    setDoneWorks(newDoneWorks);
  };

  const clickDeleteButtonHandler = (id) => {
    const deleteDoneWorks = doneWorks.filter((work) => work.id !== id);
    const deleteWorks = doneWorks.filter((work) => work.id === id);

    setDoneWorks(deleteDoneWorks);
    setWork([...work, ...deleteWorks]);
  };

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <form>
        <div className="add-form">
          <div className="input-group">
            <label className="form-label">제목</label>
            <input
              className="input"
              value={title}
              onChange={titleChangeHandler}
            />

            <label className="form-label">내용</label>
            <input
              className="input"
              value={comment}
              onChange={commentChangeHandler}
            />
          </div>
          <button className="add-button" onClick={clickAddButtonHandler}>
            추가하기
          </button>
        </div>
      </form>
      <h2>Working.. 🔥</h2>
      <div className="app-style">
        {work.map((item) => {
          return (
            <div key={item.id} className="component-style">
              <h3>{item.title}</h3>
              <div>{item.comment}</div>
              <div className="btn">
                <button
                  className="red-btn"
                  onClick={() => clickRemoveButtonHandler(item.id)}
                >
                  삭제하기
                </button>
                <button
                  className="green-btn"
                  onClick={() => clickCompleteButtonHandler(item.id)}
                >
                  완료
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <h2>Done..! 🎉</h2>
      <div className="app-style">
        {doneWorks.map((item) => {
          return (
            <div key={item.id} className="component-style">
              <h3>{item.title}</h3>
              <div>{item.comment}</div>
              <div className="btn">
                <button
                  className="red-btn"
                  onClick={() => clickDoneRemoveButtonHandler(item.id)}
                >
                  삭제하기
                </button>
                <button
                  className="green-btn"
                  onClick={() => clickDeleteButtonHandler(item.id)}
                >
                  취소
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
