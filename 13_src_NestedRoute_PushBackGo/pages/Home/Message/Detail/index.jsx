import React, { Component } from 'react'
//import {qs} from 'url-parse'

const DetailData = [
  {id:'01',content:'message111'},
  {id:'02',content:'message222'},
  {id:'03',content:'message333'},
]

export default class Detail extends Component {

  render() {
    console.log(this.props)
    // receive by params 
    //const {id,title} = this.props.match.params

    // receive by search
    //const {search} = this.props.location
    //const {id,title} = qs.parse(search)

    // receive by state
    const {id,title} = this.props.location.state || {}

    const findResult = DetailData.find((detailObj)=>{
      return detailObj.id === id
    }) || {}
    return (
        <ul>
            <li>ID: {id}</li>
            <li>TITLE: {title}</li>
            <li>CONTENT: {findResult.content}</li>
        </ul>
    )
  }
}
