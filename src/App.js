import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Equation from './Equation';


class App extends Component {
	constructor(props) {
		super(props);
		const {value1, value2, value3} = this.numberGenerator();
		this.state = {
			value1: value1,
			value2: value2,
			value3: value3,
			numCorrect: 0,
			answeredQuestions: 0
		}
	}

	numberGenerator() {
		return {
			value1: Math.floor(Math.random() * 100),
			value2: Math.floor(Math.random() * 100),
			value3: Math.floor(Math.random() * 100),
		}
	}

	updateScore(score) {
		this.setState({numCorrect: this.state.numCorrect + score})
	}

	newEquation() {

		this.setState(this.numberGenerator());
		this.setState({answeredQuestions: this.state.answeredQuestions + 1});
	}

  render() {
		const {value1, value2, value3} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Equation
						numbers={[value1, value2, value3]}
						updateScore= {(score) => this.updateScore(score)}
						newEquation= {() => this.newEquation()}
					/>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.answeredQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
