import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import loading from './../images/loading.gif'
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
    <div className="container-fluid d-flex justify-content-center align-items-center" id="singlePage">
    	<div className="row">
    		{<div className="col-12 col-md-8  mx-auto">
            {
                isLoading ?
                <div className="container-fluid d-flex justify-content-center align-items-center" id="loading">
                    <div className="row">
                        <div className="col-12">
                            <img src={loading} alt="" />
                        </div>
                    </div>
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