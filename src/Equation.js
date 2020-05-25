import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Equation extends Component {
	state = {
		proposedAnswer: Math.floor(Math.random() * 3) +
			this.props.numbers[0] +
			this.props.numbers[1] +
			this.props.numbers[2]
	}

	check(playerAnswer) {
		const correctAnswer = this.props.numbers.reduce((sum, num) => sum + num);
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

Equation.propTypes = {
	numbers: PropTypes.array.isRequired,
	updateScore: PropTypes.func.isRequired,
	newEquation: PropTypes.func.isRequired
};

export default Equation;
