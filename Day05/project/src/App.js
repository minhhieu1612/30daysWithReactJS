import React, { Component } from "react";
import "./app.css";
import AddJob from "./components/AddJob";
import SearchAndSort from './components/SearchAndSort';
import JobTable from './components/JobTable';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddJob: false,
      jobWillAdd: {},
      jobEditing: null,
      jobEdited: null
    };
  }

  toggleAddJob = e => {
    this.setState({ showAddJob: !this.state.showAddJob });
  }

  onCloseForm = e => {
    this.setState({ showAddJob: false });
  }

  onShowForm = e => {
    this.setState({ showAddJob: true });
  }

  onGenerateData = () => {
    let tasks = [

      {
        id: this.generateID(),
        name: 'Learn React',
        status: true
      }, {
        id: this.generateID(),
        name: 'Get Done with "I love Yoo"',
        status: false
      }, {
        id: this.generateID(),
        name: 'Learn Angular 8',
        status: false
      }, {
        id: this.generateID(),
        name: 'Go Swimming',
        status: true
      }, {
        id: this.generateID(),
        name: 'Play Soccer',
        status: false
      }
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  generateID = () => {
    let hash = '';
    for (let i = 0; i < 5; i++) {
      hash += Math.floor((1 + Math.random()) * 0x1000000).toString(16);
      if (i < 4) {
        hash += '-';
      }
    }
    return hash;
  }

  clearLocalStorage = () => {
    localStorage.removeItem('tasks');
  }

  onReceiveJob = (task) => {
    this.setState({ jobWillAdd: task });
  }

  onUpdateJob = (job) => {

    this.setState({
      jobEditing: job
    });

    this.onShowForm();
  }

  onEditedJob = (job) => {
    this.setState({
      jobEdited: job
    });
  }

  render() {
    let { jobEditing } = this.state;
    return (
      <div className="container-fluid">
        <h1 className="display-3 py-4 d-flex align-self-center">
          Jobs Management
        </h1>
        <hr width="100%" />
        <div className="row">
          <div className={(this.state.showAddJob) ? "col-3" : "d-none"}>
            {/* Add Job */}
            <AddJob
              onCloseForm={this.onCloseForm}
              onReceiveJob={this.onReceiveJob}
              jobEditing={jobEditing}
              onEditedJob={this.onEditedJob}
            />
          </div>
          <div className={(this.state.showAddJob) ? "col-9" : "col"}>
            <button className="btn btn-primary" onClick={this.toggleAddJob}>
              <i className="fa fa-plus"></i> Add Job
            </button>
            <button className="btn btn-danger ml-3" onClick={this.onGenerateData}>
              <i className="fa fa-pen"></i> Generate Data
            </button>
            <button className="btn btn-warning ml-3" onClick={this.clearLocalStorage}>
              <i className="fa fa-trash"></i> Clear Cookie
            </button>
            {/* Search - Sort */}
            <SearchAndSort />

            {/* Show Job */}
            <JobTable
              jobWillAdd={this.state.jobWillAdd}
              onUpdateJob={this.onUpdateJob}
              editedJob={this.state.jobEdited}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
