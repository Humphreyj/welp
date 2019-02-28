import React from 'react';

const Hamburger = (props) => {
    return (
    	<button className="toggle" onClick={props.click}>
    		<i className="fas fa-water"></i>
    	</button>
        
    );
};



export default Hamburger;
