import React, {useState, useEffect} from 'react'

const Country = (props) => {
	
  	return (
  	
    <div className="container mt-3">
    	{/*search engine start*/}
    	<div className="row">
	    	<form className="form-inline col-12 mx-auto">
			  	<i className="fas fa-search" aria-hidden="true"></i>
			  	<input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
			    aria-label="Search"/>
			</form>
		</div>
    	{/*search engine end */}
   		{/*display country start */}
   		<div className="row">
   			<div className="col-12 col-md-4 col-lg-3 mx-auto">
   				<div className="card">
				  	<img src="..." className="card-img-top" alt="..." />
				  	<div className="card-body">
				    	<h5 className="card-title">Card title</h5>
				    	<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				    	<a href="#" className="btn btn-primary">Go somewhere</a>
				  	</div>
				</div>
   			</div>
   		</div>
    	{/*display country end */}
    </div>



  )
}

export default Country;