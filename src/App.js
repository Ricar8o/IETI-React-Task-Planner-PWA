import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './components/Login';
import {BrowserRouter as Router,Link, Redirect, Route} from 'react-router-dom';
import {TaskApp} from './components/TaskApp';

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

    constructor(props) {
        super(props);
    }


    render() {
        return (
          <Router>
            <div className="App">

                {/* <div>
                  <Route exact path="/" component={LoginView}/>
                   
                  { localStorage.getItem('isLoggedIn') &&  <Route path="/tasks" component={TaskAppView}/>}

                </div>

 
                { localStorage.getItem('isLoggedIn') && <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/tasks">Task</Link></li>
                </ul> 
                } */}

                {localStorage.getItem('isLoggedIn')===null && LoginView()}
                {localStorage.getItem('isLoggedIn')==="true" && TaskAppView()}

            </div>
          </Router>
        );
    }

}

export default App;