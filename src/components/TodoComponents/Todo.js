import React from "react";

function Todo(props) {
  //console.log("In todo.js props: ", props);
  // Displaying tasks here

  return (
    <ul onClick={() => props.toggleComplete(props.todoData.id)}>
      <li>{props.todoData.task}</li>
    </ul>
  );
}

export default Todo;
