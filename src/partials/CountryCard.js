import React from 'react';
import {Link} from 'react-router-dom';


const CountryCard = ({country, withDescription}) => {
  return (
    <div className="card">
		<img src={country.flag} className="card-img-top" alt="..." />
		<div className="card-body">
			<h5 className="card-title">{country.name}</h5>
			<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            {
            
            withDescription ?
	            <Link to="/" className="btn btn-primary my-1 w-100">View All Countries</Link>
	            :
	            <Link to={`/countries/${country.name}`} className="btn btn-primary my-1 w-100">View</Link>
            }


            <a href={`https://www.google.com/maps/place/${country.latlng}`} target=" _blank" className="btn btn-primary my-1 w-100">Show on the Map</a>


		</div>
	</div>
  )
}

export default CountryCard;