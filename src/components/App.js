import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Users from '../pages/Users';
import User from '../pages/User';

function App() {
  return (
    <div>
		<h3>React Redux</h3>
		<Header/>
		<hr/>
		<Switch>
			<Route path="/users" component={Users}/>
			<Route path="/user/:id" component={User}/>
			<Route path="/products"><Products/></Route>
			<Route path="/about"><About/></Route>
			<Route exact path="/"><Home/></Route>
		</Switch>
    </div>
  );
}

export default App;
