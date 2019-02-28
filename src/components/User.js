import React, { Component } from 'react';
import Location from './Location'

export class User extends Component {
	render() {
		return (
		<div className="user">
	        <div className="user-image">
	            <img src="https://www.fillmurray.com/200/308" alt="user pic"/>
	        </div> {/*userpic*/}
	        <div className="user-info">
	          <p className="username">Aquadude500</p>
	          <p className="review-number">
	            <i className="far fa-star"></i>
	            9 Reviews
	          </p>
	          <Location />
	        </div>
	        
      </div> 
      
		);
	}
}

export default User