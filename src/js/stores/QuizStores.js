const EventEmitter = require('events').EventEmitter;

var QuizDispatcher = require('../dispatchers/QuizDispatcher');
var Constants = require('../constants/QuizConstants');

var valueQuestion = "";
var valueAnswer = "";
var numberOfQuizes = 0;


var QuizStore = Object.assign({}, EventEmitter.prototype, {

	getStateQuestion: function () {
		return valueQuestion;
	},
	getStateAnswer: function () {
		return valueAnswer;
	},
	getNumberOfQuizes: function () {
		return numberOfQuizes;
	},
	addChangeListener(callback) {
		this.on(Constants.CHANGE_EVENT, callback);
	},
	removeChangeListener(callback) {
		this.removeListener(Constants.CHANGE_EVENT, callback);
	},
	emitChange() {
		this.emit(Constants.CHANGE_EVENT);
	}
});

QuizDispatcher.register(function (payload) {

	switch (payload.type) {

		case Constants.ActionTypes.ADD_QUIZ:
			
			console.log("PREGUNTA:");
			console.log(payload.question);

			console.log("RESPUESTA:");
			console.log(payload.answer);

			// Entre medias tenemos que poner estos valores en una tabla...


			// Actualizamos el numero de preguntas y reseteamos los inputs.
			numberOfQuizes = numberOfQuizes + 1;
			valueQuestion = "";
			valueAnswer = "";

			QuizStore.emitChange();
			break;
	}
});

module.exports = QuizStore;