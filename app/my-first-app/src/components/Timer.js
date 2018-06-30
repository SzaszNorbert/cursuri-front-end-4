import React, { Component } from 'react';
class Timer extends Component{

	constructor(props){
		super(props);
		//only set this .state here
		//use setstate for all other cases
		this.state={
			date:new Date().toLocaleTimeString()
		};
	}
	componentWillMount(){
		console.log("here");
		this.timerInterval=setInterval(()=>{
			this.setState({
				date:new Date().toLocaleTimeString()
			});
		}, 1000);
	}

	componentDidMount(){
		console.log("here,after");
	}

	componentWillUnmount(){
		clearInterval(this.timerInterval);
	}
	render(){
		return (
		<p>
		<span>{this.props.label}</span>
		<span>{this.state.date}</span>
		</p>
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