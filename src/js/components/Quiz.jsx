var QuizActions = require('../actions/QuizActions');

var Quiz = React.createClass({
	addQuestionClick: function(){
		QuizActions.add_Quiz(this.questionInput.value, this.answerInput.value);
	},
	render: function(){

		return (
			<form>
				<label> Pregunta: </label>
				<input id="pregunta" placeholder="Pregunta" ref={(ref) => this.questionInput = ref} />

				<label> Respuesta: </label>
				<input id="answer" placeholder="Respuesta" ref={(ref) => this.answerInput = ref} />

				<button type="reset" onClick={this.addQuestionClick}> Añadir Quiz </button>
			</form>
		)
	}
});

module.exports = Quiz;