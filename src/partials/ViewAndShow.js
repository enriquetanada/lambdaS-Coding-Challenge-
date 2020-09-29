import React from 'react';

const ViewAndShow = (props) => {
  return (
    <div>
    	<Link to={`/countries/${country.name}`} className="btn btn-primary my-1 w-100">View</Link>
        <a href={`https://www.google.com/maps/place/${country.latlng}`} target=" _blank" className="btn btn-primary my-1 w-100">Show on the Map</a>

    </div>
  )
}

export default ViewAndShow;