// import React from "react";
// import "../css/ToDoList.css";
// import Task from "./Task";


// function ToDoList() {
//   const form = document.getElementById("todo-form");
//   const input = document.getElementById("todo-input");
//   const todoLane = document.getElementById("todo-lane");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const value = input.value;

//     if (!value) return;

//     const newTask = document.createElement("p");
//     newTask.classList.add("task");
//     newTask.setAttribute("draggable", "true");
//     newTask.innerText = value;

//     newTask.addEventListener("dragstart", () => {
//       newTask.classList.add("is-dragging");
//     });

//     newTask.addEventListener("dragend", () => {
//       newTask.classList.remove("is-dragging");
//     });

//     todoLane.appendChild(newTask);

//     input.value = "";
//   });
//   return (
//     <div className="sche-list-board">
//       <form id="todo-form">
//         <input type="text" placeholder="New TODO..." id="todo-input"/>
//         <button type="submit">Add</button>
//       </form>
//       <div className="lanes">
        
//         <div className="swim-lane" id="todo-lane">
//           <h3 className="heading">TODO</h3>

//           <p className="task" draggable="true">공부</p>
//           <p className="task" draggable="true">팀플</p>
//           <p className="task" draggable="true">캡스톤</p>
//         </div>

//         <div className="swim-lane" id="doing-lane">
//           <h3 className="heading">DOING</h3>

//           <p className="task" draggable="true">과제</p>
//         </div>

//         <div className="swim-lane" id="done-lane">
//           <h3 className="heading">Done</h3>

//           <p className="task" draggable="true">인생</p>
//           <p className="task" draggable="true">잠</p>
//         </div>

//       </div>
//     </div>
//     );
// }

// export default ToDoList
import React, { useState } from 'react';
import '../css/ToDoList.css';


const ToDoList = () => {
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);
  const [newCardTitle, setNewCardTitle] = useState('');

  const handleDragStart = (event, card, status) => {
    event.dataTransfer.setData('card', JSON.stringify(card));
    event.dataTransfer.setData('status', status);
  };

  const handleDrop = (event, status) => {
    const droppedCard = JSON.parse(event.dataTransfer.getData('card'));
    const prevStatus = event.dataTransfer.getData('status');

    if (prevStatus === status) return;

    switch (prevStatus) {
      case 'todo':
        setTodo(todo.filter((card) => card.id !== droppedCard.id));
        break;
      case 'inProgress':
        setInProgress(inProgress.filter((card) => card.id !== droppedCard.id));
        break;
      case 'done':
        setDone(done.filter((card) => card.id !== droppedCard.id));
        break;
      default:
        break;
    }

    switch (status) {
      case 'todo':
        setTodo([...todo, droppedCard]);
        break;
      case 'inProgress':
        setInProgress([...inProgress, droppedCard]);
        break;
      case 'done':
        setDone([...done, droppedCard]);
        break;
      default:
        break;
    }
  };

  const handleInputChange = (event) => {
    setNewCardTitle(event.target.value);
  };

  const handleAddCard = (status) => {
    if (newCardTitle.trim() === '') return;

    const newCard = {
      id: Date.now(),
      title: newCardTitle.trim(),
    };

    switch (status) {
      case 'todo':
        setTodo([...todo, newCard]);
        break;
      case 'inProgress':
        setInProgress([...inProgress, newCard]);
        break;
      case 'done':
        setDone([...done, newCard]);
        break;
      default:
        break;
    }

    setNewCardTitle('');
  };

  const renderCards = (cards, status) => {
    return (
      <div
        className="column"
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => handleDrop(event, status)}
      >
        <h3>{status}</h3>
        {cards.map((card) => (
          <div
            key={card.id}
            className="card"
            draggable
            onDragStart={(event) => handleDragStart(event, card, status)}
          >
            {card.title}
          </div>
        ))}
        {/* <div className="add-card">
          <input
            type="text"
            placeholder="카드 제목"
            value={newCardTitle}
            onChange={handleInputChange}
          />
          <button onClick={() => handleAddCard(status)}>추가</button>
        </div> */}
      </div>
    );
  };

  return (
    <div className="sche-list-board">
      <div className="add-card">
        <input
          type="text"
          placeholder="카드 제목"
          value={newCardTitle}
          onChange={handleInputChange}
        />
        <button id="addCardBtn" onClick={() => handleAddCard("todo")}>추가</button>
      </div>
      <div id="sche-kanban-board">
        {renderCards(todo, 'todo')}
        {renderCards(inProgress, 'inProgress')}
        {renderCards(done, 'done')}
      </div>
    </div>
  );
};

export default ToDoList;
