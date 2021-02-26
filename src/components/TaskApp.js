import React from 'react';
import  DrawerComponent  from './DrawerComponent';
import { CardsComponent } from './CardsComponent';
import { NewTask } from './NewTask';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './Tasks.css';
import moment from "moment";

export class TaskApp extends React.Component {

    constructor(props) {
        super(props);
        const task = {
            "description": "some description text ",
            "responsible": {
                "name": "Santiago Carrillo",
                "email": "sancarbar@gmail"
            },
            "status": "ready",
            "dueDate": 156464645646
        }
        this.state = {items: [task,task,task], open: false, text: '', priority: 0, dueDate: moment()};
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    render() {
        
        return (
            <div >
                
                <DrawerComponent/>
                <div className="container">
                    {/* <div className="cards-container">
                        <CardsComponent taskList={this.state.items}/>
                        <Fab color="primary" aria-label="add">
                            <AddIcon onClick={this.handleClickOpen} />
                        </Fab>
                    </div> */}
                    <div className="form-container">
                        <NewTask state={this.state}/>
                    </div>
                </div>


            </div>
        );
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
      };

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: moment( date )
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }
}
