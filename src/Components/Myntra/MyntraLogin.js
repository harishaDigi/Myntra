import React from 'react' 
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {TextField} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import {Route, Link,BrowserRouter as Router,NavLink } from 'react-router-dom';
import Home from '../../Home'
import Navbar from './Navbar'
import '../index.css'
class MyntraLogin extends React.Component{
          constructor(props){
          super(props)
          }
          handleSubmit = (e)=>{
            e.preventDefault()
            console.log("entered in handle submit====",e);
            console.log("this.props=====",this.props);
            
            this.props.history.push(`/dashboard`);
          }
          render(){
                    const responseFacebook = (response) => {
                              console.log(response);
                            }
                        
                            const responseGoogle = (response) => {
                              console.log(response);
                            }
                    return(
                  
                    
                                                     
                               <div className="container">
                                        <div className = "main-container">
                                                  <h1>Login To Myntra</h1>
                                                  <p className="login-info-text">Easily Using</p>
                                                  <FacebookLogin 
                                                  appId="630453180633476" 
                                                  fields="name,email,picture"
                                                  callback={responseFacebook}/>
                                                 <br />
                                                 <br/>
                                          <GoogleLogin
                                                  clientId="" //CLIENTID NOT CREATED YET
                                                  buttonText="LOGIN WITH GOOGLE"
                                                  onSuccess={responseGoogle}
                                                  onFailure={responseGoogle}
                                                  />
                                                  <p className="login-info-text">- or using email-</p>
                                                  <TextField
                                                            margin='dense'
                                                            variant='outlined'
                                                            name='host'
                                                            fullWidth
                                                            label='Your email address'
                                                            />
                                                  <TextField
                                                            margin='dense'
                                                            variant='outlined'
                                                            name='username'
                                                            fullWidth
                                                            label='enter password'
                                                  />
                                         <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                                            Login

                                       </Button>
                                        </div>
                                        </div>
                    
                    )
          }
}
export default MyntraLogin