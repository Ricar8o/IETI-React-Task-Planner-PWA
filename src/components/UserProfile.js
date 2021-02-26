
import React, {Component} from 'react';
import './NewTask.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Grid, TextField, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import './UserProfile.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class UserProfile extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="UserData">
                <div className="userContainer">
                    <form  className="user-form">
                        <h2> Registration</h2>
                        <br/>
                        <Grid container justify="center" alignItems="center" spacing={2} >
                            <Grid item>
                            <FontAwesomeIcon icon={faUser} size="6x" />
                            </Grid>
                            
                        
                        </Grid>
                        <TextField
                            className="campo"
                            margin="normal"
                            required
                            fullWidth
                            id="Full name"
                            label="Full name"
                            name="fullname"
                            autoComplete="fullname"
                            autoFocus
                        />
                        <TextField
                            className="campo"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            className="campo"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            autoComplete="password"
                            autoFocus
                        />
                        <TextField
                            className="campo"
                            margin="normal"
                            required
                            fullWidth
                            id="confirm"
                            label="Confirm"
                            name="confirm"
                            autoComplete="comfirm"
                            autoFocus
                        />
                        <div className="Button-User-Container" justify="center" alignItems="center" spacing={2} >
                            <Button size="large"  fullWidth variant="outlined" color="primary">
                                save
                            </Button>
                        </div>
                        
                        

                    </form>
                </div>
                <br/>
                <br/>
            </div>
        );
    }



} 