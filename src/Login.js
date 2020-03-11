import React from 'react'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class Login extends React.Component{
          constructor(){
                    super()
          }
          render(){
                    const responseFacebook = (response) => {
                              console.log(response);
                            }
                        
                            const responseGoogle = (response) => {
                              console.log(response);
                            }
                    return(
                              <div className = "container">
                              <div className="login_page">
                                        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>
                                                  <FacebookLogin
                                                            appId="630453180633476" 
                                                            fields="name,email,picture"
                                                            callback={responseFacebook}/>
                                        <br />
                                        <br />

                                                  <GoogleLogin
                                                            clientId="" //CLIENTID NOT CREATED YET
                                                            buttonText="LOGIN WITH GOOGLE"
                                                            onSuccess={responseGoogle}
                                                            onFailure={responseGoogle}
                                                            />
                              </div>                              
                              </div>
                    )
          }
}
export default  Login