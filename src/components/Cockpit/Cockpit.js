import React from 'react';
import classes from './Cockpit.css';

export const Cockpit = (props) => {
    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if(props.persons.length<=2) {
        assignedClasses.push('red');
    }
    if(props.persons.length <=1) {
        assignedClasses.push('bold');
    }
    
    return (
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button onClick={props.clicked}  className={btnClass}>Toogle Person</button>
        </div>

    )
}

export default Cockpit;