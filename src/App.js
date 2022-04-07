import React from 'react';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <Router> 

        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>



      {/*Search Page ( the results page) */}
      {/* */}



      </Router>
    </div>
  );
}

export default App;
