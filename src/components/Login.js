import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import './Login.css'

localStorage.setItem('username', 'Ricardo');
localStorage.setItem('password', '1234567');

export class Login extends React.Component{

    constructor(props) {
        super(props);
        this.handleClickChange = this.handleClickChange.bind(this);
      
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        
                        <form onSubmit={this.handleClickChange} className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Login
                            </Button>
                            
                            
                        </form>
                        
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
    handleClickChange(e) {
        let username = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        if (username == localStorage.getItem('username') && password == localStorage.getItem('password')) {
            localStorage.setItem('isLoggedIn', true);
            
        }else 
            alert("Not");
    
    }

}