import React from 'react';
import Country from './components/Country';
import {
	BrowserRouter as Router,
	Switch,
	Route	
} from 'react-router-dom';


function App() {
  return (
    <Router>

    	<Switch>

    	<Route path="/">
    		<Country />
    	</Route>

    	</Switch>
    	
    </Router>
  )
}

export default App;
