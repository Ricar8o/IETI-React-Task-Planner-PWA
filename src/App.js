import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './components/Login';
import {BrowserRouter as Router,Link, Redirect, Route} from 'react-router-dom';
import {TaskApp} from './components/TaskApp';
import { UserProfile } from './components/UserProfile';

localStorage.setItem('username', 'ricardo@somemail.com');
localStorage.setItem('password', '1234567');
localStorage.setItem('fullname', 'Ricardo Martinez');

const LoginView = () => (
  <div className='loginview'>
    <header className="App-header">
        <h1 className="App-title">TASK PLANNER</h1>
    </header>
    <img src={logo} className="App-logo" alt="logo"/>
    <Login/>
  </div>

);

const TaskAppView = () => (
  <div className="taskAppView">
    <TaskApp/>
  </div>
);


class App extends Component {

    LogicView = () => (
      <div className="logicAppView">
        {localStorage.getItem('isLoggedIn')===null && LoginView()}
        {localStorage.getItem('isLoggedIn')==="true" && TaskAppView()}
      </div>
    );
    
    UserView = () => (
      <div className="userAppView">
        <UserProfile/>
      </div>
    );

    render() {
        return (
          <Router>
            <div className="App">
              <div>
                  <Route exact path="/" component={this.LogicView}/>

                  <Route path="/register" component={this.UserView}/>
                  
              </div>

            </div>
          </Router>
        );
    }

}

export default App;