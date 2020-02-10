import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  // Form onChange Handler
  formChangeHandler = (event) => {
    this.setState({ task: event.target.value });
  };

  // Form onSubmit Handler
  formSubmitHandler = (event) => {
    event.preventDefault();

    // Props function to add object to array here
    //console.log(this.props);
    this.props.addObjToArray(this.state.task);
  };

  // Form inputs, Add button, and Clear button
  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <label htmlFor="Todo">ToDo: </label>
          <input
            name="Todo"
            placeholder="enter your task here"
            onChange={this.formChangeHandler}
            value={this.state.task}
          />

          <button type="submit">Submit ToDo</button>
          <button>Remove Completed ToDo's</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
