import React from "react";

function Todo(props) {
  //console.log("In todo.js props: ", props);
  // Displaying tasks here

  return (
    <ul>
      <li>{props.allTask}</li>
    </ul>
  );
}

export default Todo;
