import React, { useState } from "react";
import "./App.css";

function App() {
  const id = Math.random();

  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [work, setWork] = useState([
    { id: id, title: "산책", comment: "강아지 산책 시키기" },
  ]);

  const getTitle = (event) => {
    setTitle(event.target.value);
  };
  const getComment = (event) => {
    setComment(event.target.value);
  };

  const addBtn = (event) => {
    event.preventDefault();
    const newWork = {
      id,
      title,
      comment,
    };

    setWork([...work, newWork]); //구글링 배열유지

    setTitle("");
    setComment("");
  };

  const delBtn = (id) => {
    const newWorks = work.filter((work) => work.id !== id);
    setWork(newWorks);
  };

  const comBtn = (id) => {
    const completeWorks = work.filter((work) => work.id !== id);
    const completeDoneWorks = work.filter((work) => work.id === id);

    setWork(completeWorks);
    setDoneWorks([...doneWorks, ...completeDoneWorks]);
  };

  const [doneWorks, setDoneWorks] = useState([
    {
      id: 0,
      title: "자바스크립트",
      comment: "자바스크립트 공부하기",
    },
  ]);

  const doneDelBtn = (id) => {
    const newDoneWorks = doneWorks.filter((doneWork) => doneWork.id !== id);
    setDoneWorks(newDoneWorks);
  };

  const changeDoneBtn = (id) => {
    const deleteDoneWorks = doneWorks.filter((work) => work.id !== id);
    const deleteWorks = doneWorks.filter((work) => work.id === id);

    setDoneWorks(deleteDoneWorks);
    setWork([...work, ...deleteWorks]);
  };

  return (
    <div className="layout">
      <div className="logo">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <form>
        <div className="adding">
          <div className="search">
            <label className="title-input">제목</label>
            <input className="input" value={title} onChange={getTitle} />

            <label className="title-input">내용</label>
            <input className="input" value={comment} onChange={getComment} />
          </div>
          <button className="add-button" onClick={addBtn}>
            추가하기
          </button>
        </div>
      </form>
      <h2>Working.. 🔥</h2>
      <div className="section">
        {work.map((item) => {
          return (
            <div key={item.id} className="workcards">
              <h3>{item.title}</h3>
              <div>{item.comment}</div>
              <div className="btn">
                <button className="red-btn" onClick={() => delBtn(item.id)}>
                  삭제하기
                </button>
                <button className="green-btn" onClick={() => comBtn(item.id)}>
                  완료
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <h2>Done..! 🎉</h2>
      <div className="section">
        {doneWorks.map((item) => {
          return (
            <div key={item.id} className="workcards">
              <h3>{item.title}</h3>
              <div>{item.comment}</div>
              <div className="btn">
                <button className="red-btn" onClick={() => doneDelBtn(item.id)}>
                  삭제하기
                </button>
                <button
                  className="green-btn"
                  onClick={() => changeDoneBtn(item.id)}
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
