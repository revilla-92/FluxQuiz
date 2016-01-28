const EventEmitter = require('events').EventEmitter;

var QuizDispatcher = require('../dispatchers/QuizDispatcher');
var Constants = require('../constants/QuizConstants');


var QuizStore = Object.assign({}, EventEmitter.prototype, {

	getQuestion: function () {
		return question;
	},
	getAnswer: function () {
		return answer;
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

	console.log("PAYLOAD:");
	console.log(payload);

	switch (payload.type) {

		case Constants.ActionTypes.ADD_QUIZ:
			
			console.log("PREGUNTA:");
			console.log(payload.question);

			QuizStore.emitChange();
			break;
	}
});

module.exports = QuizStore;