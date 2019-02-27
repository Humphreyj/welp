import React, { Component } from 'react';

export class Location extends Component {
	render() {
		return (
		<div className="location-wrap">
	        <h4 className="location">Austin, Tx</h4>
	        <button className="btn btn-primary get-location">Change Location</button>
       </div>
		);
	}
}


export default Location