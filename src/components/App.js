import React, { Component } from "react";
import FormEditor from "./FormEditor/FormEditor";
import shortId from "shortid";
import TaskList from "./TaskList/TaskList";
import Search from "./Search/Search";

const SearchInputWords = (tasks, search) => {
  return tasks.filter(elem =>
    elem.value.toLowerCase().includes(search.toLowerCase())
  );
};

export default class App extends Component {
  state = {
    tasks: [],
    search: ""
  };

  componentDidMount() {
    // console.log("componentDidMount");
    const getTasks = localStorage.getItem("tasks");
    if (getTasks) {
      const getParsIrem = JSON.parse(getTasks);
      this.setState({ tasks: getParsIrem });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  }

  getTask = task => {
    const newArr = { ...task, id: shortId() };
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newArr]
    }));
  };
  onFilterSearch = e => {
    this.setState({ filter: e.target.value });
    console.log(this.state);
  };

  deleteTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(elem => elem.id !== id)
    }));
  };

  updatePriority = (id, priority) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(elem =>
        elem.id === id ? { ...elem, priority } : elem
      )
    }));
  };

  serachTasks = ({ target }) => {
    this.setState({ search: target.value });
  };

  saveEditor = note => {
    console.log("get!!!", note);
    const { value, id } = note;
    this.setState(prevState => ({
      tasks: prevState.tasks.map(elem =>
        elem.id === id ? { ...elem, value } : elem
      )
    }));
  };

  render() {
    const { tasks, search } = this.state;
    const findWords = SearchInputWords(tasks, search);
    return (
      <>
        <FormEditor saveValue={this.saveEditor} onGetTask={this.getTask} />
        <Search onSearch={this.serachTasks} />
        <TaskList
          returnSaveItem={this.saveEditor}
          tasks={findWords}
          onDeleteItem={this.deleteTask}
          onUpdatePriority={this.updatePriority}
        />
      </>
    );
  }
}
