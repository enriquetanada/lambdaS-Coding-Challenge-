import React from 'react';
import Country from './components/Country';
import CountrySingle from './components/CountrySingle'
import {
	BrowserRouter as Router,
	Switch,
	Route	
} from 'react-router-dom';


function App() {
  return (
    <Router>

    	<Switch>

    	

    	<Route path="/countries/:name">
    		<CountrySingle />
    	</Route>

        <Route path="/">
            <Country />
        </Route>

    	</Switch>
    	
    </Router>
  )
}

export default App;
