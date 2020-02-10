import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoArray: []
    };
  }
  // Add object function to array
  addObjToArray = (taskString) => {
    const taskBuilt = {
      task: taskString,
      id: Date.now(),
      completed: false
    };
    this.setState({ todoArray: [...this.state.todoArray, taskBuilt] });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addObjToArray={this.addObjToArray} />
      </div>
    );
  }
}

export default App;
