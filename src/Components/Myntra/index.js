import React from 'react'
import MyntraLogin from './MyntraLogin';
import Home from '../../Home'
import Navbar from './Navbar'
import Woman from './Woman'
import '../index.css'
import {Route, Link,BrowserRouter as Router,NavLink } from 'react-router-dom';

class Myntra extends React.Component{
          constructor(){
                    super()
          }
          render(){
                    return(<div className="main">
                              <div className="navbar">                    
                                        <Navbar/>
                              </div>
                              <Router>
                            
                                        <Route exact path='/' component={MyntraLogin}/>
                                        <Router path='/dashboard' component={Home}/>
                                        <Route path='/woman' component={Woman}/>
                              </Router>
                              </div>
                    )
                    
          }
}
export default Myntra