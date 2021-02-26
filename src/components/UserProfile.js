
import React, {Component} from 'react';
import './NewTask.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Grid, IconButton, TextField, Typography, useTheme } from '@material-ui/core';
import { Button } from '@material-ui/core';
import './UserProfile.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import swal from 'sweetalert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';

export class UserProfile extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            "username": localStorage.getItem('username'),
            "password": localStorage.getItem('password'),
            "fullname": localStorage.getItem('fullname'),
            "confirm": localStorage.getItem('password'),
        }
        this.handleFullnameChange = this.handleFullnameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmChange = this.handleConfirmChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    render() {
        return (
            <div className="UserData">
                <div className="userContainer">
                    <div className="IconContainer">
                        <Link to="/">
                            <IconButton aria-label="back" >
                                <ChevronLeftIcon /> 
                            </IconButton>
                        </Link>
                    </div>
                        
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
                            value={this.state.fullname}
                        />
                        <TextField
                            className="campo"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={this.handleUsernameChange}
                            value={this.state.username}
                        />
                        <TextField
                            className="campo"
                            margin="normal"
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="password"
                            autoFocus
                            onChange={this.handlePasswordChange}
                            value={this.state.password}
                        />
                        <TextField
                            className="campo"
                            margin="normal"
                            fullWidth
                            id="confirm"
                            label="Confirm"
                            name="confirm"
                            type="password"
                            autoComplete="comfirm"
                            autoFocus
                            onChange={this.handleConfirmChange}
                            value={this.state.confirm}
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
        
        
        if (this.state.password == this.state.confirm){
            localStorage.setItem('fullname',this.state.fullname);
            localStorage.setItem('username',this.state.username);
            localStorage.setItem('password',this.state.password);
            swal({
                title: "Info Updated",
                icon: "success"
            })
        }else{
            swal({
                title: "Passwords do not match.",
                icon: "error"
            })
            this.clearForm();
        }
    }

    clearForm() {
        this.setState({
            username: localStorage.getItem('username'),
            password: localStorage.getItem('password'),
            fullname: localStorage.getItem('fullname'),
            confirm: localStorage.getItem('password'),
        })
    }

} 