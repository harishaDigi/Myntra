import React from 'react'
import axios from 'axios'
import Todo from './Todo'
import AddTodo from './AddTodo'
class TodoApp extends React.Component{
          constructor(){
                    super()
                    this.state={
                              todos:[],
                              addTodo:""
                    }
          }
          componentWillMount(){
          axios.get(`https://jsonplaceholder.typicode.com/todos`).then(res =>{
                    this.setState({
                              todos:res.data.slice(0,5)
                    })
          })
          }
          handleSubmit = (e) =>{
                    console.log("handle submit-----",e)
                    let todo = {
                                        'title':e,
                                        'completed':false,
                                        'id':this.state.todos.length
                              }
                              let ar = [...this.state.todos, todo]
                              this.setState({todos:ar})
             
          }
          handleChange = (id)=>{
                    console.log("entered in handle change of TodoApp-----",id)
                    this.setState({todos: this.state.todos.map((todo) => {
                             if(todo.id === id){
                                       console.log("entered in handleChange-----",todo.title);
                                       todo.completed = !todo.completed
                             }
                             return todo
                    })
          })
      }
          render(){
                    console.log("this.state======",this.state)
                    return(
                              <div className="container">
                              <AddTodo submit={this.handleSubmit}/>
                              {
                                        this.state.todos.map((todo)=><Todo todo={todo} onChange={this.handleChange}/>)
                              }
                              </div>
                              
                    )
          }
}
export default TodoApp