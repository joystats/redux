import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component{
	render(){
		return (
			<div>
				<h3>Home.js : </h3>
				<ul>
					<li>Grade: {this.props.grade}</li>
				</ul>
				<br/>
				<button onClick={this.props.addGrade}>Add grade</button>
				<button onClick={this.props.downGrade}>Down grade</button>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		grade: state.first.grade
	}
}

function mapDispatchToProps(dispatch){
	return {
		addGrade: ()=>{
			dispatch({type:"ADD"})
		},
		downGrade: ()=>{
			dispatch({type:"DOWN"})
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
