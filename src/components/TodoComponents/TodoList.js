// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  // Map through Array for each task Strings
  render() {
    return (
      <div>
        {this.props.todoData.map((each) => {
          return (
            <Todo
              key={each.id}
              todoData={each}
              toggleComplete={this.props.toggleComplete}
            />
          );
        })}
        <button onClick={() => this.props.removeCompleted()}>
          Remove Completed ToDo's
        </button>
      </div>
    );
  }
}

export default TodoList;
