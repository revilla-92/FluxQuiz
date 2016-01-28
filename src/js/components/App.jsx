const Quiz = require('./Quiz.jsx');
const Cabecera = require('./Cabecera.jsx');

var QuizActions = require('../actions/QuizActions');
var QuizStore = require('../stores/QuizStores');


function getAppStateFromStore() {
	return {
		numQuizes: 		QuizStore.getNumberOfQuizes(),
		valueQuestion: 	QuizStore.getStateQuestion(),
		valueAnswer: 	QuizStore.getStateAnswer()		
	};
}


var App = React.createClass({
	getInitialState: function(){
		return getAppStateFromStore();
	},
	componentDidMount() {
		QuizStore.addChangeListener(this._onChange);
	},
	componentWillUnmount() {
		QuizStore.removeChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState(getAppStateFromStore());
	},
	render: function(){

		var valueQuestion = QuizStore.getStateQuestion();
		var valueAnswer = QuizStore.getStateAnswer();
		var numQuizes = QuizStore.getNumberOfQuizes();

		return (
			<div>
				<Cabecera numQuizes={numQuizes} />
				<Quiz valueQuestion={valueQuestion} valueAnswer={valueAnswer} />
			</div>
		)
	}
});

module.exports = App;