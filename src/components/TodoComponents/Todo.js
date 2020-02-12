import React from "react";
import "./Todo.css";

function Todo(props) {
  //console.log("In todo.js props: ", props);
  // Displaying tasks here

  return (
    <ul
      onClick={() => props.toggleComplete(props.todoData.id)}
      className={`${props.todoData.completed ? "todoStyle" : ""}`}
    >
      <li>{props.todoData.task}</li>
    </ul>
  );
}

export default Todo;
