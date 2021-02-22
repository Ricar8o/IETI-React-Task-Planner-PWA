import React from 'react';
import { Typography, Card, CardContent, CardActions, Button, List, ListItem, Grid} from '@material-ui/core';
import './Cards.css';

export class CardsComponent extends React.Component{

  constructor(props) {
    super(props);
  }   

  render() {
    return (
      <div className="Container">
        <Grid container direction="column" justify="center" spacing={2}>
          <Grid item>
            <Card className="Card" variant="outlined">
              <CardContent>
              <Typography className="title" color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid >

          <Grid item>
            <Card className="Card" variant="outlined">
              <CardContent>
              <Typography className="title" color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid >
         
        </Grid>
        
      </div>
    );
  }
}
  