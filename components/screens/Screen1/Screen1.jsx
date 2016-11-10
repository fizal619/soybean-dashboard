import React, { Component } from 'react'
import MapContainer from './MapContainer'

const Screen1 =(props)=>{
	return(
		<div className={"mapContainer"}>
			<MapContainer position={props.route.position} />
		</div>
		)
}

export default Screen1