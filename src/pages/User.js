import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class User extends Component{
	componentDidMount(){
		this.props.loadUserInfo(this.props.match.params.id)
	}
	render(){
		
		return(
			<div>
				<h3>User.js : get params.id & fetch user info from api</h3>
				<ul>
					<li>ID: {this.props.match.params.id}</li>
					<li>Name: {this.props.user.name}</li>
					<li>Username: {this.props.user.username}</li>
					<li>Email: {this.props.user.email}</li>
					<li>Website: {this.props.user.website}</li>
				</ul>
			</div>
		)
	}
}

async function fetchUserInfo(id){
	return await axios.get(process.env.REACT_APP_BASE_URL+"/users/"+id);
}

function mapStateToProps(state){
	return{
		user:state.first.user
	}
}

function mapDispatchToProps(dispatch){
	return{
		loadUserInfo:(id)=>{
			fetchUserInfo(id).then(res=>{
				dispatch({type:"LOAD_USER_INFO",payload:res.data})
			})
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(User);

