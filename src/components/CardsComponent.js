import React from 'react';
import { Typography, Card, CardContent, CardActions, Button, List, ListItem, Grid} from '@material-ui/core';
import './Cards.css';

export class CardsComponent extends React.Component{

  constructor(props) {
    super(props);
  }   

  render() {
    const taskList = this.props.taskList.map((task, i) => {
      return (
        <Grid item key={i}>
          <Card className="Card" variant="outlined">
            <CardContent >
            <p  className="Description">
               {task.description}
              </p>
              <Grid container justify="center"  className="Status">
                <Grid item xs>
                  <p>{task.status}</p>
                  
                </Grid>
                <Grid item xs>
                <p>{task.dueDate}</p>
                </Grid>
                
              </Grid>
              <div className="Contact">
                {task.responsible.name}
                <br/>
                {task.responsible.email}
              </div>
            </CardContent>
          </Card>
        </Grid >
          // <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
      );
    });

    
    return (
      <div className="Container">
        <Grid container direction="column" justify="center" spacing={2}>
          {taskList}
         
        </Grid>
        
      </div>
    );
  }
}
  