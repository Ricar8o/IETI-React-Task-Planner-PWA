import React from 'react';
import  DrawerComponent  from './DrawerComponent';
import { CardsComponent } from './CardsComponent';

export class TaskApp extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        
        return (
            <div className="container">
                
                
                <DrawerComponent/>

                <div className="content">    
                    <CardsComponent/>
                </div>


            </div>
        );
    }

}
