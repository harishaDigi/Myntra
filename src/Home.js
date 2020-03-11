import React from 'react'

class Home extends React.Component{
          constructor(){
                    super()
          }
          render(){
                    return(
                    <div>
                              <div style={{margin:5, padding:3}}>
                    <div> <div></div><h2 style={{color:"#4863A0",textAlign:"center"}}>Robotic Process Automation</h2></div>
                              <p style= {{fontSize:"18px",lineHeight:"1.5em", color:"#6D7B8D"}}>RPA robots are capable of mimicking many–if not most–human user actions. They log into applications, move files and folders, copy and paste data, fill in forms, extract structured and semi-structured data from documents, scrape browsers, and more.</p>
                    </div>
                    <div style={{display: "flex"}}>
                              <div >
                                        <img style={{height:"50%",width:450,margin:3,padding:5}} src="https://blog-idcuk.com/wp-content/uploads/2019/05/AdobeStock_157225065-848x450.jpeg"/>
                              </div>
                         
                              <div style={{margin:3,padding:5}}>
                                     <p style= {{fontSize:18,lineHeight:"1.5em",color:"#6D7B8D"}}>  Robotic Process Automation is the technology that allows anyone today to configure computer software, or a “robot” to emulate and integrate the actions of a human interacting within digital systems to execute a business process. RPA robots utilize the user interface to capture data and manipulate applications just like humans do. They interpret, trigger responses and communicate with other systems in order to perform on a vast variety of repetitive tasks. Only substantially better: an RPA software robot never sleeps, makes zero mistakes and costs a lot less than an employee.</p> 
                                     <ul style={{color:"#4682B4",listStyleType:"none"}}>
                                               <li style={{padding: 0,display:"block",fontSize:20,paddingLeft: "45px", paddingBottom: "2px"}}>Better accuracy</li>
                                               <li style={{padding: 0,display:"block", fontSize:20,paddingLeft: "45px", paddingBottom: "2px"}}>Improved compliance</li>
                                               <li style={{padding: 0 ,display:"block" ,fontSize:20,paddingLeft: "45px", paddingBottom: "2px"}}>Fast cost savings</li>
                                               <li style={{padding: 0,display:"block" ,fontSize:20,paddingLeft: "45px", paddingBottom: "2px"}}>Super scalable</li>
                                               <li style={{padding: 0,display:"block" ,fontSize:20,paddingLeft: "45px", paddingBottom: "2px"}}>Increased speed and productivity</li>
                                     </ul>
                              </div>
                    </div>
                    </div>
                    )
          }
}
export default Home