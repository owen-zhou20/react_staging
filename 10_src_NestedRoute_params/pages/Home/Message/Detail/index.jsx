import React, { Component } from 'react'

const DetailData = [
  {id:'01',content:'message111'},
  {id:'02',content:'message222'},
  {id:'03',content:'message333'},
]

export default class Detail extends Component {

  render() {
    console.log(this.props)
    /* receive params */
    const {id,title} = this.props.match.params
    const findResult = DetailData.find((detailObj)=>{
      return detailObj.id === id
    })
    return (
        <ul>
            <li>ID: {id}</li>
            <li>TITLE: {title}</li>
            <li>CONTENT: {findResult.content}</li>
        </ul>
    )
  }
}
