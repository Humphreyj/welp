import React from 'react';
import Sidebar from './Sidebar'

const Ratings = (props) => {
    return (
<div className="wrapper">

	<input className='search' type="text" name='search' placeholder='Search...' />
	<button className="search btn btn-primary go">Go!</button>

	<section className="restaurant-ratings">

		<div className="rating card">
			<img className='card-img-top' src='https://fillmurray.com/400/400'/>
			<div className="rating-info card-body">
				<div className="score">
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star-half star"></i>
				</div>
				<p className="rating-title">Kyle's Krabs</p>
				<p className="rating-address">1234 Street Austin, Tx 77777</p>
				<button className="btn btn-primary">Rate Restaurant</button>
			</div>
		</div>

		<div className="rating card">
			<img className='card-img-top' src='https://fillmurray.com/400/401'/>
			<div className="rating-info card-body">
				<div className="score">
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star-half star"></i>
				</div>
				<p className="rating-title">Mark's</p>
				<p className="rating-address">1234 Street Austin, Tx 77777</p>
				<button className="btn btn-primary">Rate Restaurant</button>
			</div>
		</div>

		<div className="rating card">
			<img className='card-img-top' src='https://fillmurray.com/400/402'/>
			<div className="rating-info card-body">
				<div className="score">
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>
				<p className="rating-address">1234 Street Austin, Tx 77777</p>
				<p className="rating-title">Kevin's Krunchy Tacos</p>
				<button className="btn btn-primary">Rate Restaurant</button>
			</div>
		</div>
</section>

</div>
    	
        
    );
};



export default Ratings;
