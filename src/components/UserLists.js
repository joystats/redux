import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class UserLists extends Component{
	render(){
		var {data} = this.props
		return(
			<li>ID: {data.id}, Name <Link to={`/user/${data.id}`}>{data.name}</Link></li>
		)
	}
}

export default UserLists;