import React, {useState, useEffect} from 'react'
import CountryCard from './../partials/CountryCard'

const Country = (props) => {
	
	const [countries, setCountries] = useState([])
	const [searchTerm, setSearchTerm] = React.useState("");
 	const [searchResults, setSearchResults] = React.useState([]);

	useEffect(() =>{
		fetch("https://restcountries.eu/rest/v2/all")
		.then(res =>{return res.json()})
		.then(countries =>{setCountries(countries)})
	},[])

	const handleChange = e =>{
		setSearchTerm(e.target.value);

	}

	useEffect(()=>{
		const filter = countries.filter(country=>
			country.name.toLowerCase().includes(searchTerm.toLowerCase())
			
			)
		setSearchResults(filter)

	},[searchTerm])

	let countryList = (searchTerm ? searchResults : countries).map(country =>(
   		<div className="col-12 col-md-4 col-lg-3 mx-auto mt-5" key={country.name}>
   			<CountryCard country={country} />
   		</div>
	))


  	return (
  	
    <div className="container mt-3">
    	
    	<div className="row">
    		{/*search engine start*/}
	    	<form className="form-inline col-12 mx-auto">
			  	<i className="fas fa-search" aria-hidden="true"></i>
			  	<input 
			  		className="form-control form-control-sm ml-3 w-100" 
			  		type="text" 
			  		placeholder="Search"
			    	aria-label="Search"
			    	onChange={handleChange}
			    	value={searchTerm}
			    />
			</form>
    		{/*search engine end */}

    		{/*display country start */}
			{countryList}
    		{/*display country end */}

		</div>	
    </div>
  )
}

export default Country;