import React, { Component } from 'react';
class Timer extends Component{
	constructor(){
		super(props);
		//only set this .state here
		//use setstate for all other cases
		this.state={
			date:new Date()
		};
	}


	tick(){
			this.setState({date:new Date()});
	}

	render(){
		return (
		<p>{this.props.label}: {this.tick()}</p>
		);
	}
}

/*function Timer(props){
	return (
		<p>{props.label}: {Date()}</p>
	);
}*/


export default Timer;

//parallax