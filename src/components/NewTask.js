import React, {Component} from 'react';
import './NewTask.css';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'react-datepicker/dist/react-datepicker.css';
import { Grid, MenuItem, TextField } from '@material-ui/core';
import  DateFnsUtils  from "@date-io/date-fns";
import { Button } from '@material-ui/core';

const statusValues = ["Ready","In progress","Done"] 

export class NewTask extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="TodoApp">
                <form  className="todo-form">
                    <h2> NEW TASK</h2>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="Description"
                        name="description"
                        autoComplete="description"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="responsible"
                        label="Responsible"
                        name="responsible"
                        autoComplete="Responsible"
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="Email"
                        autoFocus
                    />
                    <div className="spaces-container">
                        <TextField
                            id="status"
                            select
                            required
                            label="Select Status"
                            fullWidth
                            helperText="(Ready, In Progress, Done)"
                        >
                            {statusValues.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                            ))}
                        </TextField>
                        <br/>
                        <br/>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                id="due-date"
                                fullWidth
                                required
                                placeholder="Due date"
                                onChange={this.handleDateChange}>
                            </DatePicker>
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="button-container">
                        <Grid container justify="space-around" alignItems="center">
                            <Grid item>
                                <Button size="large" variant="contained" color="primary"  >
                                    Algo
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button size="large" variant="contained" color="primary" type="submit">
                                    Submit
                                </Button>
                            </Grid>
                            
                        </Grid>
                    </div>
                    
                </form>
                <br/>
                <br/>
            </div>
        );
    }

    

}