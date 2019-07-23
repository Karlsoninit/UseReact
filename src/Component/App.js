import React, { Component } from "react";
import TaskEditor from "./TaskEditor/TaskEditor";
import shortId from "shortid";
import TaskList from "./TaskList/TaksList";
import Search from "./Search/Search";

// const FindUniqueWordInSearchForm = (task, filter) => {
//   return task.filter(task =>
//     task.text.toLowerCase().includes(filter.toLowerCase())
//   );
// };

class App extends Component {
  state = {
    tasks: [],
    filter: ""
  };

  handleGetStateForDraw = task => {
    const addNewTasks = {
      ...task,
      id: shortId.generate(),
      complited: false
    };

    this.setState(prevState => ({ tasks: [...prevState.tasks, addNewTasks] }));
  };

  deleteTask = id => {
    console.log(id);
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(el => el.id !== id)
    }));
  };

  render() {
    const { tasks, filter } = this.state;
    return (
      <>
        <TaskEditor onGetTask={this.handleGetStateForDraw} />
        <Search />
        <TaskList tasks={tasks} DeleteElement={this.deleteTask} />
      </>
    );
  }
}

export default App;

// handleDeleteElement = id => {
//   this.setState(prevState => ({
//     tasks: prevState.tasks.filter(el => el.id !== id)
//   }));
// };

// updatePriority = (id, priority) => {
//   this.setState(prevState => ({
//     tasks: prevState.tasks.map(elem =>
//       elem.id === id ? { ...elem, priority } : elem
//     )
//   }));
// };

// updateComplited = id => {
//   this.setState(prevState => ({
//     tasks: prevState.tasks.map(task =>
//       task.id === id ? { ...task, complited: !prevState.complited } : task
//     )
//   }));
// };

// filterSearch = e => {
//   this.setState({ filter: e.target.value });
//   console.log(this.state);
// };
