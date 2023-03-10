import React, { Component } from 'react'
import PubSub from 'pubsub-js'
//import axios from 'axios'

export default class Search extends Component {

  search1 = ()=>{
    const {keyWordElement:{value:keyWord}} = this
    // this.props.updateAppState({isFirst:false,isLoading:true}) 
    PubSub.publish('searchKey',{isFirst:false,isLoading:true})
    //#region
    // axios 
    /*axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => {
        // this.props.updateAppState({isLoading:false,users:response.data.items}) 
        PubSub.publish('searchKey',{isLoading:false,users:response.data.items})
      },
      error => {
        // this.props.updateAppState({isLoading:false,err:error.message}) 
        PubSub.publish('searchKey',{isLoading:false,err:error.message})
        //console.log('Fail',error);
      }
    ) */
      //#endregion
    // fetch
    fetch(`/api1/search/users2?q=${keyWord}`).then(
      response =>{
        console.log('Success to connect servers');
        return response.json()
    },
      /* error =>{
        console.log('Fail to connect servers',error);
        return new Promise(()=>{})
      } */
    ).then(
      response =>{console.log('Success to get data',response)},
      // error =>{console.log('Fail to get data',error)}
    ).catch(
      (error)=>{console.log('Fail',error);}
    )

  }

  search = async()=>{
    const {keyWordElement:{value:keyWord}} = this
    PubSub.publish('searchKey',{isFirst:false,isLoading:true})
    try {
      const response = await fetch(`/api1/search/users2?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('searchKey',{isLoading:false,users:data.items})
    } catch (error) {
      console.log('Fail',error)
      PubSub.publish('searchKey',{isLoading:false,err:error.message})
    }
  }

  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
                <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={this.search}>Search</button>
            </div>
        </section>
    )
  }
}
