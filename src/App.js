import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person'


class App extends Component {
  // return (
  //   React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now?'))
  // )
  state = {
    persons: [
      { id: 'fm6akrdm', name: "Max", age: 28 },
      { id: 'mkd4smfs', name: "Manu", age: 26 },
      { id: 'mfdkw6ef', name: "Stephanie", age: 24 }
    ],
    otherPersons: 'some name value',
    showPersons: false
  }



  nameChangedHander = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //findIndexは指定されたモノがあったら、最初のその位置を返す。

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState(
      {
        persons: persons
      }
    );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid #00acee",
      padding: "8px",
      point: "cusor"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHander(event, person.id)} />
          })}

        </div>
      )
    }

    return (
      <div className="App">
        <h1 >
          I'm a React App
        </h1>
        <p>This is really Working</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>

        {persons}
      </div>

    )
  }


}


export default App;
