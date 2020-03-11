import React from 'react'
import {Route, Link,BrowserRouter as Router} from 'react-router-dom';
import Woman from './Woman'
//import myntra from '../images/myntra.png'
import '../index.css'
class Navbar extends React.Component{
          constructor(){
                    super()
          }
          render(){
                    return(
                              <div>    
                                         <Router>
                                        <ul>
                                                  <li><a href="#" className="myntraweb-sprite desktop-logo sprites-headerLogo" data-reactid="16"></a></li>
                                                  <li><a href="#">MEN</a></li>
                                                  <li><a href="/woman" >WOMEN</a></li>
                                                  <li><a href="#">KIDS</a></li>
                                                  <li><a href="#">HOME&LIVING</a></li>
                                                  <li><a href="#">DISCOVER</a></li>
                                        </ul>
                                     
                                        </Router>
                              </div>
                    )
          }
}
export default Navbar