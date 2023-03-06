import React, { Component } from 'react'
import './index.css'


export default class Footer extends Component{

  // Check all todo items
  handleCheckAll = (event)=>{
    this.props.checkAllTodo(event.target.checked)
  }

  // claer all done tasks
  handleClearAllDone = ()=>{
    this.props.ClearAllDone()
  }

  render() {
    const {todos} = this.props
    //
    const doneCount = todos.reduce((pre,todo)=>{return pre + (todo.done?1:0)},0)
    //total
    const total = todos.length
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===total && total!==0 ? true : false}/>
            </label>
            <span>
                <span>{doneCount} Completed</span> / {total} Total tasks
            </span>
            <button onClick={this.handleClearAllDone} className="btn btn-danger">Delete completed tasks</button>
        </div>
    )
  }
}
