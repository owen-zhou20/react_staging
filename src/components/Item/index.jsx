import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {mouse:false} //flag for mouse enter and leave

    // callback for mouse enter and leave
    handleMouse = (flag) =>{
        return () => {
            this.setState({mouse:flag})
        }
    }

    // callback for checked a todo item
    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }

    // callback for delete a todo item
    handleDelete = (id)=>{
        if(window.confirm('Are you sure to delete this item?')) {
            this.props.deleteTodo(id)   
        }
    }

    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>Delete</button>
            </li>
        )
    }
}
