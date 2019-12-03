import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import UserLists from '../components/UserLists'

class Users extends Component{
	componentDidMount(){
		this.props.loadData();
	}
	render(){
		return(
			<div>
				<h3>Users.js : fetch users from api</h3>
				<ul>
					{this.props.data.map((user,index)=><UserLists key={index} data={user} />)}
				</ul>
			</div>
		)
	}
}

async function fetchData(){
	return await axios.get(process.env.REACT_APP_BASE_URL+"/users")
}

function mapStateToProps(state){
	return{
		data: state.first.data
	}
}

function mapDispatchToProps(dispatch){
	return{
		loadData:()=>{
			fetchData().then(res=>{
				dispatch({type:"LOADDATA",payload:res.data})
			})
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);

