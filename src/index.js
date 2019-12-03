import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';


function actions(state={grade:3,data:[],user:[]},action){
	switch(action.type){
		case "ADD":
			return {...state,grade:state.grade+1}
		case "DOWN":
			return {...state,grade:state.grade-1}
		case "LOADDATA":
			return {...state,data:action.payload}
		case "LOAD_USER_INFO":
			return {...state,user:action.payload}
		default:
			return state
	}
}

const reducers = combineReducers({
	first:actions
})
const store=createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
, document.getElementById('root'));
