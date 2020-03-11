import React from 'react'

class Loading extends React.Component{
          constructor(){
                    super()
                    this.state={
                              loading:false,
                              character:""
                    }
          }
          componentDidMount(){
                    console.log("componentDidMount-------")
                    this.setState({
                              loading:true
                    })
                    fetch("https://swapi.co/api/people/1").then(response=>{
                              console.log("entered in first then-------");
                              return response.json()}).then(data=>{
                              this.setState({
                                        loading:false,
                                        character:data.name})
                    })
          }
          render(){
                    console.log("entered in render------");
                    
                    return(
                              <div>
                                        {this.state.loading?<h2>Loading......</h2>:<h2>{this.state.character}</h2>}
                              </div>
                    )
          }
}
export default Loading