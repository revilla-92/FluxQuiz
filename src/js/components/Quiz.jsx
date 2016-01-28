var QuizActions = require('../actions/QuizActions');

var Quiz = React.createClass({
	addQuestionClick: function(){
		console.log(this.questionInput.value);
		QuizActions.add_Quiz(this.questionInput.value, this.answerInput.value);
	},
	render: function(){
		return (
			<div>
				<label> Pregunta: </label>
				<input id="pregunta" placeholder="Pregunta" ref={(ref) => this.questionInput = ref} />

				<label> Respuesta: </label>
				<input id="answer" placeholder="Respuesta" ref={(ref) => this.answerInput = ref} />

				<button onClick={this.addQuestionClick}> Añadir Quiz </button>
			</div>
		)
	}
});

module.exports = Quiz;