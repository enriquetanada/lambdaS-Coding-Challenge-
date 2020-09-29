import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import CountryCard from './../partials/CountryCard'



const CountrySingle = (props) => {
	let {name} = useParams();

	const [country, setCountry] = useState([]);
    const [isLoading, setIsLoading]= useState(true);

    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => {
           		setCountry(data[0])
            	setIsLoading(false)
        	
        })
    },[name])
    
 	return (
    <div className="container">
    	<div className="row">
    		{<div className="col-12 col-md-8 col-lg-5 mx-auto">
            {
                isLoading ?
                <div className="spinner-border" role="status">
                    <span className="sr-only ">Loading...</span>
                </div> 
                :
                <CountryCard country={country}  withDescription ={true}/>
            }	
    		</div>}
    	</div>
    </div>
  )
}

export default CountrySingle;