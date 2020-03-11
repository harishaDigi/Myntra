import React from 'react'

class AddTodo extends React.Component{
          constructor(){
                    super()
                    this.state={
                              todo:""
                    }
          }
          handleChange=(e)=>{
                    e.preventDefault()
                    console.log("entered in handle change--------",e.target.value)
              this.setState({[e.target.name] : e.target.value})
          }
          handleSubmit =(e)=>{
                     e.preventDefault()
                    console.log("entered in handle submit,", this.state.todo)
                    this.props.submit(this.state.todo)
          }
          render(){
                    return(
                    <div className="container" >
                   <form style = {{display:"flex" }} onSubmit={this.handleSubmit}>
                    <input 
                       type ="text" 
                       name="todo" 
                       value={this.state.todo} 
                       onChange={(e)=>this.handleChange(e)}
                       style = {{flex:10}}/> 
                    
                     <input type="submit" 
                     style = {{flex:1}} />
                    </form>
                     </div>
                    )
          }
}
export default AddTodo