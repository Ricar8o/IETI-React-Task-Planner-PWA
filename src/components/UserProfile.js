
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
        this.state={
            "username": "",
            "password": "",
            "fullname": "",
            "confirm": ""
        }
        this.handleFullnameChange = this.handleFullnameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmChange = this.handleConfirmChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {

        return (
            <div className="UserData">
                <div className="userContainer">
                    <form onSubmit={this.handleSubmit} className="user-form">
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
                            onChange={this.handleFullnameChange}
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
                            onChange={this.handleUsernameChange}
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
                            onChange={this.handlePasswordChange}
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
                            onChange={this.handleConfirmChange}
                        />
                        <div className="Button-User-Container" justify="center" spacing={2} >
                            <Button size="large"  fullWidth variant="outlined" color="primary" type="submit">
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

    handleFullnameChange(e) {
        this.setState({
            fullname : e.target.value
        })
    }

    handleUsernameChange(e) {
        this.setState({
            username : e.target.value
        })
    }
    handlePasswordChange(e) {
        this.setState({
            password : e.target.value
        })
    }

    handleConfirmChange(e) {
        this.setState({
            confirm : e.target.value
        })
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.fullname.length || !this.state.password.length || !this.state.username.length || !this.state.confirm.length)
            return;
        
        
        if (this.state.password == this.state.confirm){
            alert("Igual");
            localStorage.setItem('fullname',this.state.fullname);
            localStorage.setItem('username',this.state.username);
            localStorage.setItem('password',this.state.password);
        }
    }

} 