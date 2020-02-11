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

  // Toggle completed boolean function
  toggleComplete = (theId) => {
    const copyOfTodoArray = this.state.todoArray.map((each) => {
      if (each.id === theId) {
        return { ...each, completed: !each.completed };
      } else {
        return each;
      }
    });
    this.setState({
      todoArray: copyOfTodoArray
    });
  };

  // Remove completed ToDo's function
  removeCompleted = () => {
    const filterTodoArray = this.state.todoArray.filter((each) => {
      return each.completed.indexOf(false);
    });
    this.setState({ todoArray: filterTodoArray });
  };

  render() {
    return (
      <div>
        <h2>ToDo's For Today!</h2>
        <TodoList
          todoData={this.state.todoArray}
          toggleComplete={this.toggleComplete}
          removeCompleted={this.removeCompleted}
        />
        <TodoForm addObjToArray={this.addObjToArray} />
      </div>
    );
  }
}

export default App;
