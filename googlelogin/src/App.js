import React from 'react';
import './App.css';
import Login from './Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
    <div className="App"> 
      <Router>
      <div className="container">  
        <Switch>    
          <Route exact path='/' component={Login} ></Route>    
        </Switch>    
      </div>    
    </Router>    
    </div>  
    </>
  );
}
export default App;
