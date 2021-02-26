import React from 'react';
import  DrawerComponent  from './DrawerComponent';
import { CardsComponent } from './CardsComponent';
import { NewTask } from './NewTask';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './Tasks.css';
import moment from "moment";
import { format } from 'date-fns';

export class TaskApp extends React.Component {

    constructor(props) {
        super(props);
        const task = {
            "description": "Hacer una aplicacion de tareas en React ",
            "responsible": {
                "name": "Ricardo Martinez",
                "email": "andres.martinez-d@mail.escuelaing.edu.co"
            },
            "status": "In Progress",
            "dueDate": this.formatDate( new Date())
        }
        this.state = {items: [task], open: false,
            description: "",
            name: "",
            email: "",
            status: "",
            dueDate:""
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleStatusChange= this.handleStatusChange.bind(this);

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formatDate = this.formatDate.bind(this);
    }

    CardsView = () => (
        <div className="cards-container">
            <CardsComponent taskList={this.state.items}/>
            <Fab color="primary" aria-label="add">
                <AddIcon onClick={this.handleClickOpen} />
            </Fab>
        </div>
    );
    
    NewTaskView = () => (
        <div className="form-container">
            <NewTask state={this.state} 
            handleTextChange={this.handleTextChange} 
            handleNameChange={this.handleNameChange}
            handleEmailChange={this.handleEmailChange}
            handleStatusChange={this.handleStatusChange}
            handleDateChange={this.handleDateChange}
            handleSubmit={this.handleSubmit}
            handleClickClose={this.handleClickClose}
            />
        </div>
    );
    
    render() {
        
        return (
            <div >
                
                <DrawerComponent/>
                <div className="container">
                    {!this.state.open && this.CardsView()}
                    {this.state.open && this.NewTaskView()}
                </div>


            </div>
        );
    }

    formatDate(date){
        const dateFormat = "dd/MM/yyyy";
        var some =  format(date,dateFormat);
        return some;
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
      };

    handleClickClose = () => {
        this.setState({
            open: false
        });
    };

    handleTextChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }
    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: this.formatDate(date) 
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.description.length || !this.state.name.length || !this.state.email.length || !this.state.status.length || !this.state.dueDate)
            return;

        const newItem = {
            description: this.state.description,
            responsible: {
                name: this.state.name,
                email: this.state.email
            },
            status: this.state.status,
            dueDate: this.state.dueDate

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            open: false,
            description: "",
            name: "",
            email: "",
            status: "",
            dueDate:""
        }));
    }
}