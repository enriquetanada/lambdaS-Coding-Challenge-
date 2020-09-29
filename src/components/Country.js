import React, {useState, useEffect} from 'react'
import CountryCard from './../partials/CountryCard'
import loading from './../images/loading.gif'

const Country = (props) => {
	
	const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading]= useState(true);
	const [searchTerm, setSearchTerm] = useState("");
 	const [searchResults, setSearchResults] = useState([]);

	useEffect(() =>{
		fetch("https://restcountries.eu/rest/v2/all")
		.then(res =>{return res.json()})
		.then(countries =>{
            setIsLoading(false)
			setCountries(countries)
		})
	},[])

	const handleChange = e =>{
		setSearchTerm(e.target.value);

	}

	useEffect(()=>{
		const filter = countries.filter(country=>
			country.name.toLowerCase().includes(searchTerm.toLowerCase())
			
			)
		setSearchResults(filter)

	},[searchTerm,countries])

	let countryList = (searchTerm ? searchResults : countries).map(country =>(
   		<div className="col-12 col-md-4 col-lg-3 mx-auto mt-5" key={country.name} >
  
   				
   				<CountryCard country={country} />
   			
   		</div>
	))


  	return (
  	<>
	  	{
	  	isLoading 
	  	?
	   		<div className="container-fluid d-flex justify-content-center align-items-center" id="loading">
	   			<div className="row">
	   				<div className="col-12">
	   					<img src={loading} alt="" />
	   				</div>
	   			</div>
	   		</div>	
	    : 
		    <div className="container-fluid pt-5" id="allCountry">
		    	<div className="row">
		    		{/*search engine start*/}
			    	<form className="form-inline col-12 mx-auto">
						<div className="input-group mb-3">
						  	<div className="input-group-prepend">
						    	<span className="input-group-text" id="basic-addon1">
						  			<i className="fas fa-search" aria-hidden="true"></i>
						    	</span>
						  	</div>
						  	<input 
						  		type="text" 
						  		className="form-control" 
					  			placeholder="Search"
						  		aria-label="Search" 
						  		aria-describedby="basic-addon1"
						  		onChange={handleChange}
					    		value={searchTerm} 
						  	/>
						</div>
					</form>
		    		{/*search engine end */}

		    		{/*display country start */}

		    		{countryList}

		    		{/*display country end */}

				</div>	
		    </div>
	  	}
  	</>
  )
}

export default Country;