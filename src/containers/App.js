import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// import Radium, {StyleRoot} from 'radium';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] | constructor');
  }
  state = {
    persons: [
      {name: 'Abhinandan', age: 29},
      {name: 'Manmohan', age: 27},
      {name: 'Deepak', age: 25},
      {name:'Sadhu', age: 19}
    ],
    showPerson: false
  }

  static  getDerivedStateFromProps(props, state) {
    console.log('[App.js] |getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] |componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] |componentDidMount');

  }
  
  nameChangeHandler =(event) => {
    this.setState({
      persons: [
        {name: 'Abhinandan', age: 29},
        {name: event.target.value, age: 27},
        {name: 'Deepak', age: 29},
        {name:'Sadhu', age: 19}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  tooglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }
  render() {
    console.log('[App.js] |render');

    let persons = null;
    if(this.state.showPerson) {
      persons =  <Persons clicked={this.deletePersonHandler} persons={this.state.persons} />
    }

    

    return (
      // <StyleRoot>
        <div className="App">
       <Cockpit title={this.props.title} 
       clicked={this.tooglePersonHandler} 
       showPersons={this.state.showPerson} 
       persons={this.state.persons} />
        {persons}
        </div>
      // </StyleRoot>
    );
  }

}

export default App;
