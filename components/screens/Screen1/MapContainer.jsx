import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

Map.setIconDefaultImagePath('https://cdn.jsdelivr.net/leaflet/1.0.1/images/')

const MapContainer =(props)=> {
	console.log(props)
  return (
    <div>
      <Map center={props.position} zoom={13}>
    		<TileLayer
      		url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    		/>
    		<Marker position={props.position}>
      		<Popup>
        <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
      		</Popup>
    		</Marker>
 			 </Map>
    </div>
  );
}

export default MapContainer
