import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import React from 'react'
export  default function Routing (){
          console.log("entered in routing component")
return(
          <Router>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
        </Router>
)
   
}