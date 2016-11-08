import React, { Component } from 'react'
import {Link, Route, Router, IndexRoute, browserHistory} from 'react-router'
import Default from './main/Default'



export default class App extends Component{
	constructor(props) {
		super(props);
		
	}

	
	render(){
		return (
  		<Router history={browserHistory}>
				<Route path="/" component={Default} />
			</Router>
		)
	}
}


