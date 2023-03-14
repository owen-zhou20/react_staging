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

  replaceShow = (id,title)=>{
    //params
    //this.props.history.replace(`/home/message/detail/${id}/${title}`)

    //search
    //this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

    //state
    this.props.history.replace(`/home/message/detail`,{id:id,title:title})
  }

  pushShow = (id,title)=>{
    //params
    //this.props.history.push(`/home/message/detail/${id}/${title}`)
  
    //search
    //this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

    //state
    this.props.history.push(`/home/message/detail`,{id,title})
  }

  back = ()=>{
    this.props.history.goBack()
  }

  forward = ()=>{
    this.props.history.goForward()
  }

  go = ()=>{
    this.props.history.go(-2)
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
                  {/* pass data by params */}
                  {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                 
                  
                  {/* pass data by search  
                  <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
                  */}

                  {/* pass data by state  */}
                  <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>

                  &nbsp;<button onClick={()=>{this.pushShow(msgObj.id,msgObj.title)}}>push route</button>
                  &nbsp;<button onClick={()=>{this.replaceShow(msgObj.id,msgObj.title)}}>replace route</button>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* declare by params */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}
        

        {/* declare by search
        <Route path="/home/message/detail" component={Detail}/>
         */}

        {/* declare by state*/}
        <Route path="/home/message/detail" component={Detail}/>
        
        <button onClick={this.back}>Back</button>&nbsp;
        <button onClick={this.forward}>Forward</button>&nbsp;
        <button onClick={this.go}>Go</button>
      </div>
    )
  }
}
