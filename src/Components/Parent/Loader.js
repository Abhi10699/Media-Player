import React,{Component} from 'react';
import './Loader.css'
export default class Loader extends Component{
  render(){
    return(
      <div className="loading">
        <div class="lds-ripple"><div></div><div></div></div>
        <br/>
        <h3>Loading Playlist.</h3>
      </div>
    )
  }
}