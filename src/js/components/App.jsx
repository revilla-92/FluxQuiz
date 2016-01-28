const Quiz = require('./Quiz.jsx');

var QuizActions = require('../actions/QuizActions');
var QuizStore = require('../stores/QuizStores');

/*
function getAppStateFromStore() {
	return {

	};
}
*/
var App = React.createClass({
	/*
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
	*/
	render: function(){

		return (
			<div>
				<Quiz />
			</div>
		)
	}
});

module.exports = App;