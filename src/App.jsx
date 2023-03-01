import React,{Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import {nanoid} from 'nanoid'
import './App.css';


export default class App extends Component {

  // init state
  state = {todos:[
    {id:nanoid(),name:'eating',done:true},
    {id:nanoid(),name:'sleeping',done:true},
    {id:nanoid(),name:'coding',done:false}
  ]}

  // addTodo is used to add a TodoObj into todos
  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({todos:newTodos})
  }

  //  update todos when todoObj checked or unchecked
  updateTodo = (id,done)=>{
    const{todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj,done:done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  // delete a todo item
  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }

  // Check all todo items
  checkAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done:done}
    })
    this.setState({todos:newTodos})
  }

  // claer all done tasks
  ClearAllDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }

  render(){
    const {todos} = this.state
    return(
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo = {this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} ClearAllDone={this.ClearAllDone}/>
        </div>
      </div>
    )
  }  
}
