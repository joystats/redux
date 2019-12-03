import React, {Component} from 'react';
import {connect} from 'react-redux';

class About extends Component{
	render(){
		 return (
			<div>
				<h3>AboutJS : get state from store</h3>
				<ul>
					<li>Grade: {this.props.grade}</li>
				</ul>
			</div>
		  );
	}
}

function mapStateToProps(state){
	return{
		grade: state.first.grade
	}
}
export default connect(mapStateToProps)(About);
