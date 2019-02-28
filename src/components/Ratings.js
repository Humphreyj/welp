import React from 'react';


const Ratings = (props) => {
    return (
<div className="wrapper">
	<div className="search-box">
		<input className='search' type="text" name='search' placeholder='Search...' />
		<button className="search btn btn-primary go">Go!</button>
	</div>
	<section className="restaurant-ratings">

		<div className="rating card">
			<img className='card-img-top' src='https://fillmurray.com/400/400' alt='restaurant'/>
			<div className="rating-info card-body">
			<p className="rating-title">Kyle's Krabs</p>
				<div className="score">
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star-half star"></i>
				</div>
				<p className="rating-address">1234 Street Austin, Tx 77777</p>
				<button className="btn btn-primary">Rate Restaurant</button>
			</div>
		</div>

		<div className="rating card">
			<img className='card-img-top' src='https://fillmurray.com/400/401' alt='restaurant' />
			<div className="rating-info card-body">
			<p className="rating-title">Mark's</p>
				<div className="score">
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star-half star"></i>
				</div>
				<p className="rating-address">1234 Street Austin, Tx 77777</p>
				<button className="btn btn-primary">Rate Restaurant</button>
			</div>
		</div>

		<div className="rating card">
			<img className='card-img-top' src='https://fillmurray.com/400/402' alt='restaurant'/>
			<div className="rating-info card-body">
			<p className="rating-title">Kevin's</p>
				<div className="score">
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
				</div>
				<p className="rating-address">1234 Street Austin, Tx 77777</p>
				<button className="btn btn-primary">Rate Restaurant</button>
			</div>
		</div>
		<div className="pagination">
			<p className="last"><i className="far fa-hand-point-left"></i> Back</p>
			<p className="next">Next <i className="far fa-hand-point-right"></i></p>
		</div>
</section>

</div>
    	
        
    );
};



export default Ratings;
