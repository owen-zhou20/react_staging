import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

    // limited fun and required for received props
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    // callback for a keyboard change event
    handleKeyUp = (event) =>{
        // if input key is Enter, get input value
        if(event.keyCode !== 13) return
        // Can't enter a empty task name
        if(event.target.value.trim() === '') {
            alert("Can't enter a empty task name")
            return
        }
        // get a todoObj with enter task name
        const todoObj = {id:nanoid(),name:event.target.value,done:false}
        // return todoObj to App
        this.props.addTodo(todoObj)
        // claer input
        event.target.value = ''
    }

    render() {
        return (
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="Please enter your task name then click Enter"/>
                </div>
            )
        }
    }
