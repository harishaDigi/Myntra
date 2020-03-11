import React from 'react'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

const User = ({match})=>  <p>{match.params.id}</p>
class Users extends React.Component{
          constructor(){
                    super()
          }
        
         
          render(){
                    return(
                    <div>
                              <h1>Users</h1>
                              <p>Choose Users from here</p>
                              <Router>
                                        <ul>
                                                  <li><Link to='/user/1'>User 1</Link></li>
                                                  <li><Link to='/user/2'>User 2</Link></li>
                                                  <li><Link to='/user/3'>User 3</Link></li>
                                        </ul>
                                        <Route path='/user/:id' component={User}/>
                              </Router>
                    </div>
                    )
          }
}
export default Users