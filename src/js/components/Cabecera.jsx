var Cabecera = React.createClass({
	render: function(){
		return (
			<label> Numero de preguntas realizadas: {this.props.numQuizes} </label>
		)
	}
});

module.exports = Cabecera;