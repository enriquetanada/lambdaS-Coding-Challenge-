import React from 'react';

const ViewAll = (props) => {
  return (
    <div>
    	<Link to="/" className="btn btn-primary my-1 w-100">View All Count</Link>
    	<a href={`https://www.google.com/maps/place/${country.latlng}`} target=" _blank" className="btn btn-primary my-1 w-100">Show on the Map</a>

    </div>
  )
}

export default ViewAll;