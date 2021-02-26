import React from 'react';
import  DrawerComponent  from './DrawerComponent';
import { CardsComponent } from './CardsComponent';
import { TaskFilter }  from './TaskFilter';
import { NewTask } from './NewTask';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './Tasks.css';
import { format } from 'date-fns';

const statusValues = ["Ready","In Progress","Done"] 

export class TaskApp extends React.Component {

    constructor(props) {
        super(props);
        const task = {
            "description": "Hacer una aplicacion de tareas en React ",
            "responsible": {
                "name": "Ricardo Martinez",
                "email": "andres.martinez-d@mail.escuelaing.edu.co"
            },
            "status": statusValues[1],
            "dueDate": this.formatDate( new Date())
        }
        this.state = {items: [task,task], open: false,
            description: "",
            name: "",
            email: "",
            status: "",
            dueDate:"",
            responsibleValues:[task.responsible.name],
            filterResponsible: "",
            filterStatus: "",
            filterDate: new Date(),
            allItems: [task,task]
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

        this.handleFilterResponsible = this.handleFilterResponsible.bind(this);
        this.handleFilterStatus = this.handleFilterStatus.bind(this);
        this.handleFilterDate = this.handleFilterDate.bind(this);
        this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
        this.clearContent = this.clearContent.bind(this);

        this.applyFilter = this.applyFilter.bind(this)
    }

    CardsView = () => (
        <div className="cards-container">
            <TaskFilter statusValues={statusValues} 
                responsibleValues={this.state.responsibleValues}
                handleFilterResponsible={this.handleFilterResponsible}
                handleFilterStatus={this.handleFilterStatus}
                handleFilterDate={this.handleFilterDate}
                handleFilterSubmit={this.handleFilterSubmit}
                clearContent={this.clearContent}
                filterDate={this.state.filterDate}
                filterResponsible={this.state.filterResponsible}
                filterStatus={this.state.filterStatus}
            />
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
            statusValues={statusValues}
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
            allItems: prevState.items.concat(newItem),
            open: false,
            description: "",
            name: "",
            email: "",
            status: "",
            dueDate:"",
            responsibleValues: !prevState.responsibleValues.includes(prevState.name) ? prevState.responsibleValues.concat(prevState.name) : prevState.responsibleValues,
        }));
    }

    // Filter Handles
    handleFilterResponsible(e){
        this.setState({
            filterResponsible:  e.target.value 
        });
    }

    handleFilterStatus(e){
        this.setState({
            filterStatus:  e.target.value 
        });
    }

    handleFilterDate(date){
        this.setState({
            filterDate:  date
        });
    }

    handleFilterSubmit(e){
        e.preventDefault();
        this.applyFilter();
    }

    clearContent(e){
        e.preventDefault();
        this.setState(prevState => ({
            filterResponsible: "",
            filterStatus: "",
            filterDate: new Date()
        }));
        this.setState({
            items: this.state.allItems
        });
    }


    applyFilter(){
        let itemsList = [];
        let showItems = this.state.allItems;
        let filterName = this.state.filterResponsible;
        let filterStatus = this.state.filterStatus;
        let filterDate = this.state.filterDate;

        if (filterName.length ){
            showItems.filter( item => {
                if ( item.responsible.name==filterName){
                    itemsList.push(item);
                }
            });
            showItems = itemsList;
            itemsList = [];
        }

        if (filterStatus.length ){
            showItems.filter( item => {
                if ( item.status==filterStatus){
                    itemsList.push(item);
                }
            });
            showItems = itemsList;
            itemsList = [];
        }

        showItems.filter( item => {
            if ( item.dueDate==this.formatDate(filterDate)){
                itemsList.push(item);
            }
        });
        showItems = itemsList;
        
        this.setState({
            items:  showItems
        });
    }
}