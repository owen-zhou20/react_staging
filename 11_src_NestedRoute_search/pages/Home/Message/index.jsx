import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr:[
      {id:'01',title:'message01'},
      {id:'02',title:'message02'},
      {id:'03',title:'message03'}
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj)=>{
              return (
                <li key={msgObj.id}>
                  {/* pass data by params 
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                  */}

                  {/* pass data by search  */}
                  <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* declare by params 
        <Route path="/home/message/detail/:id/:title" component={Detail}/>
        */}

        {/* declare by search */}
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    )
  }
}
