import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Home from './Home';
import Users from './Users';
import Contact from './Contact';
import {Route, Link,BrowserRouter as Router} from 'react-router-dom';
import Login from './Login'
import './index.css'

function App() {
  return (
    <div className="main-div">
    
      <Router>
        <div class="main">
    <ul>
      <li> <Link to='/home' >Home</Link></li>
      <li><Link to='/users'>Users</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
     </ul>
     </div>
     <Route path='/home' component={Home}></Route>
     <Route path='/users' component={Users}></Route>
     <Route path='/contact' component={Contact}></Route>

     </Router>
    </div>
  );
}

export default App;
