import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component{
	render(){
		return(
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/users">Users</Link></li>
					<li><Link to="/about">About Us</Link></li>
					<li><Link to="/products">Products</Link></li>
				</ul>
			</div>
		)
	}
}

export default Header;