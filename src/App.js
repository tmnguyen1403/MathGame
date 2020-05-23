import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Equation from './Equation';


class App extends Component {
	state = {
		value1: Math.floor(Math.random() * 100),
		value2: Math.floor(Math.random() * 100),
		value3: Math.floor(Math.random() * 100),
		numCorrect: 0,
		numQuestions: 1
	}

	numberGenerator() {
		return {
			value1: Math.floor(Math.random() * 100),
			value2: Math.floor(Math.random() * 100),
			value3: Math.floor(Math.random() * 100),
			numQuestions: this.state.numQuestions + 1
		}
	}

	updateScore(score) {
		this.setState({numCorrect: this.state.numCorrect + score})
	}

	newEquation() {
		this.setState(this.numberGenerator());
	}

  render() {
		const numbers = [this.state.value1, this.state.value2, this.state.value3];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Equation
						numbers={numbers}
						updateScore= {(score) => this.updateScore(score)}
						newEquation= {() => this.newEquation()}
					/>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
