import React, { Component } from 'react'
import Link from 'react-router/lib/Link'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'

const Screen1 =()=> <h1>SCREEN 1</h1>
const Screen2 =()=> <h1>SCREEN 2</h1>
const Home =(props)=> <div>
												<h1>HOME</h1>
													<Link to="/" >Home?</Link><br/>
													<Link to="/screen1" >screen1</Link><br/>
													<Link to="/screen2" >screen2</Link><br/>
													{props.children}
											</div> 

const App = (props) => (
  <Router history={browserHistory}>
			<Route path="/" component={Home} >
				<Route path="/screen1" component={Screen1} />	
				<Route path="/screen2" component={Screen2} />
			</Route>
</Router>
);

export default App;
