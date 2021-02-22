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
            <CardContent>
            <Typography className="title" color="textSecondary" gutterBottom>
                {task.description}
              </Typography>
              <Typography variant="body2" component="p">
                {task.status} - {task.dueDate}
                
              </Typography>
              <Typography variant="body1" component="p">
                <br/>
                {task.responsible.name}
                <br/>
                {task.responsible.email}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Nothing Button</Button>
            </CardActions>
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
  