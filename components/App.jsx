import React, { Component } from 'react'
import {Link, Route, Router, IndexRoute, browserHistory} from 'react-router'
import Screen1 from './screens/Screen1/Screen1.jsx'

const App=(props)=>{
		return (
  		<Router key={Math.random()} history={browserHistory}>
				<Route path="/" component={Screen1} position={props.position} />
			</Router>
		)
	}

export default App

