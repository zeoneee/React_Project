import React from "react";
import "../css/ToDoList.css";
import Task from "./Task";


function ToDoList() {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const todoLane = document.getElementById("todo-lane");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;

    if (!value) return;

    const newTask = document.createElement("p");
    newTask.classList.add("task");
    newTask.setAttribute("draggable", "true");
    newTask.innerText = value;

    newTask.addEventListener("dragstart", () => {
      newTask.classList.add("is-dragging");
    });

    newTask.addEventListener("dragend", () => {
      newTask.classList.remove("is-dragging");
    });

    todoLane.appendChild(newTask);

    input.value = "";
  });
  return (
    <div className="sche-list-board">
      <form id="todo-form">
        <input type="text" placeholder="New TODO..." id="todo-input"/>
        <button type="submit">Add</button>
      </form>
      <div className="lanes">
        
        <div className="swim-lane" id="todo-lane">
          <h3 className="heading">TODO</h3>

          <p className="task" draggable="true">공부</p>
          <p className="task" draggable="true">팀플</p>
          <p className="task" draggable="true">캡스톤</p>
        </div>

        <div className="swim-lane" id="doing-lane">
          <h3 className="heading">DOING</h3>

          <p className="task" draggable="true">과제</p>
        </div>

        <div className="swim-lane" id="done-lane">
          <h3 className="heading">Done</h3>

          <p className="task" draggable="true">인생</p>
          <p className="task" draggable="true">잠</p>
        </div>

      </div>
    </div>
    );
}

export default ToDoList