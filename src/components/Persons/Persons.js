import React from 'react';
import Person from './Person/Person';

export const Persons = (props) =>{
  console.log('[Persons.js]| rendering');

  return  props.persons.map((person, index) => {
    return (
    <Person
    click= {props.clicked}
    key ={index}
    name={person.name}
    age={person.age} 
    />
    );
  });
} ;

export default Persons;