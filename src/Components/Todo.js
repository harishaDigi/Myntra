import React from 'react'
import axios from 'axios'
import './index.css'
class Todo extends React.Component{
          constructor(){
                    super()
                    this.state={
                              todos:[]
                    }
          }
        handleChage = ()=>{
                  //e.preventDefault()
                  console.log("event in handleChange-------")
                 // this.props.onChange(e)
        }  
   render(){
             return(
                       <div className="container">
                       <div style={{background:this.props.todo.completed?"#A9A9A9":"#DCDCDC", height:"25px"}}>
                                 <input type="checkbox" name='selected'  checked={this.props.todo.completed} onChange={()=>this.props.onChange(this.props.todo.id)}/>
                                 {this.props.todo.title}
                                 <button type="button" style={{background:"red",float:"right"}}>remove</button>
                       </div>
                       </div>
             )
   }       
}
export default Todo