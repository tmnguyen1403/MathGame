import React, {Component} from 'react';

class Equation extends Component {
	state = {
		proposedAnswer: Math.floor(Math.random() * 3) +
			this.props.numbers[0] +
			this.props.numbers[1] +
			this.props.numbers[2]
	}

	check(playerAnswer) {
		const numbers = this.props.numbers;
		const correctAnswer = numbers[0] + numbers[1] + numbers[2];
		const isCorrect = correctAnswer === this.state.proposedAnswer;
		let score = 0;
		if (isCorrect === playerAnswer) {
			console.log("Your answer is correct");
			score = 1;
		}
		else
			console.log(`Your answer is incorrect. The correct answer is ${correctAnswer}`);
		this.props.updateScore(score);
		this.props.newEquation();
		this.setState({
			proposedAnswer: Math.floor(Math.random() * 3) +
				this.props.numbers[0] +
				this.props.numbers[1] +
				this.props.numbers[2]
		});
	}

	render (){
		return (
			<div className="equation">
				<p className="text">
					{`${this.props.numbers[0]} +
						${this.props.numbers[1]} +
						${this.props.numbers[2]} =
						${this.state.proposedAnswer}
					`}
				</p>
				<button onClick={() => this.check(true)}>True</button>
				<button onClick={() => this.check(false)}>False</button>
			</div>
		)
	}
}

export default Equation;
