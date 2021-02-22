import React from 'react';
import  DrawerComponent  from './DrawerComponent';
import { CardsComponent } from './CardsComponent';

export class TaskApp extends React.Component {

    constructor(props) {
        super(props);
        const task = {
            "description": "some description text ",
            "responsible": {
                "name": "Santiago Carrillo",
                "email": "sancarbar@gmail"
            },
            "status": "ready",
            "dueDate": 156464645646
        }
        this.state = {items: [task]};
    }
    
    render() {
        
        return (
            <div className="container">
                
                
                <DrawerComponent/>
                <CardsComponent taskList={this.state.items}/>


            </div>
        );
    }

}
