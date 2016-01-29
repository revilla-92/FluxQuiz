import {Table, Column, Cell} from 'fixed-data-table';

var QuizActions = require('../actions/QuizActions');

var Exam = React.createClass({

	deleteQuestionClick: function(id){
		QuizActions.delete_Quiz(id);
	},

	render: function(){

		// Recogemos el array de dos dimensiones que contiene las preguntas y las respuestas.
		var rows = this.props.quizExam;

		if(this.props.tableIsVisible){

			return (
				<Table rowHeight={50} rowsCount={rows.length} width={1200} height={600} headerHeight={50}>
				    <Column
				    	header={<Cell> Numero Pregunta </Cell>}
				    	cell={({rowIndex}) => (
				    		<Cell>
				    			{rowIndex + 1}
				    		</Cell>
				    	)}
				    	width={100}
				    />
				    <Column
				    	header={<Cell> Pregunta </Cell>}
				    	cell={({rowIndex}) => (
				    		<Cell>
				    			{rows[rowIndex][0]}
				    		</Cell>
				    	)}
				    	width={500}
				    />
				    <Column
				    	header={<Cell> Respuesta </Cell>}
				    	cell={({rowIndex}) => (
				    		<Cell>
				    			{rows[rowIndex][1]}
				    		</Cell>
				    	)}
				    	width={500}
				    />
				    <Column
				    	header={<Cell> Eliminar </Cell>}
				    	cell={({rowIndex}) => (
				    		<Cell>
				    			<button id={rowIndex + 1} onClick={this.deleteQuestionClick}> Eliminar Quiz </button>
				    		</Cell>
				    	)}
				    	width={100}
				    />
				</Table>
			)

		}else {
			return (
				<label> Aun no hay quizes creados. </label>
			)
		}
		
	}
});


module.exports = Exam;