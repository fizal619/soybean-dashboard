import React, { Component } from 'react'
import {Link, Route, Router, IndexRoute, browserHistory} from 'react-router'
import Map from './screens/Map'

const App=(props)=>{
	counter++
		return (
  		<Router key={Math.random()} history={browserHistory}>
				<Route path="/" component={Map} position={props.position} />
			</Router>
		)
	}

export default App

