import DateFnsUtils from '@date-io/date-fns';
import { Button, MenuItem, Modal, TextField } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import './TaskFilter.css';

export class TaskFilter extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            open : false
        }
        this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    }

    render(){
        return(
            <div>
                <div className="button-filter">
                    <Button variant="outlined" color="inherit" onClick={this.handleClickOpen}>
                        Filters
                    </Button>
                </div>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClickClose}
                >
                    <div className="filter">
                        <form onSubmit={this.handleFilterSubmit}>
                            <h2> TASK FILTERS</h2>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    id="due-date"
                                    fullWidth
                                    placeholder="Due date"
                                    onChange={this.props.handleFilterDate}
                                    helperText="Default value is today"
                                    value={this.props.filterDate}
                                >
                                </DatePicker>
                            </MuiPickersUtilsProvider>
                            <br/><br/>
                            <TextField
                                id="status"
                                select
                                label="Select Status"
                                fullWidth
                                helperText="(Ready, In Progress, Done)"
                                defaultValue= ""
                                onChange={this.props.handleFilterStatus}
                                value = {this.props.filterStatus}
                            >
                                {this.props.statusValues.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                                ))}
                            </TextField>
                            <br/><br/>
                            <TextField
                                id="responsible"
                                select
                                label="Select Responsible"
                                fullWidth
                                value = {this.props.filterResponsible}
                                onChange={this.props.handleFilterResponsible}
                            >
                                {this.props.responsibleValues.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                                ))}
                            </TextField>
                            <div className="buttons-container">
                               
                                <Button size="small" variant="outlined" color="inherit" fullWidth type="submit">
                                    Apply
                                </Button>
                                <br/><br/>
                        
                                <Button size="small" variant="outlined" color="inherit" fullWidth onClick={this.props.clearContent}>
                                    Clear All
                                </Button>           
                         
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        )
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

    handleFilterSubmit(e){
        this.props.handleFilterSubmit(e);
        this.handleClickClose();
    }
}