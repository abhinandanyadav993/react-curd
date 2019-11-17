 import React from 'react';
 import classes from './Person.css';

 const person = (props) => {
   console.log('[Person.js]| rendering');

     return (
        //  <div className="Person" style={style}>
        <div className={classes.Person}>
        <p onClick={props.click}>My name is {props.name} and i am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name} />
        </div>
     )
 };

//  export default Radium(person);
 export default person;

 