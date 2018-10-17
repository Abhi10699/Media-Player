import React,{Component} from 'react';
import {List,QuickAccess,Videos,Navbar,Settings,Loader} from '../Components'
import axios from 'axios';
import API_KEY from '../key';
import './Parent.css'

// React Router
import { BrowserRouter as Router, Route, Link,Redirect} from "react-router-dom";

export default class Parent extends Component{
  constructor(){
    super();
    this.videos = []
    this.ids = []
    this.state =  {
      playlistUrl: "",
      videos:[],
      id:[],
      index:parseInt(localStorage.getItem('LastSong')) || 0,
      isLoading:true,
      lastSongId: localStorage.getItem("LastSongId") || "eA64wXhbjo"
    }
  }
  getPlaylist(token){
    let key = API_KEY
    let URL = 'https://www.googleapis.com/youtube/v3/playlistItems'
    let config = {
      maxResults:50,
      part:'snippet,contentDetails',
      playlistId:localStorage.getItem("LastPlaylist")  || "PLH-MxCdxgrGp8jGqjx_pICATXecnVNGhI", 
      key:key,
      pageToken:token
    }
    axios.get(URL,{
        params:config
    })
    .then(d=>{
      d.data.items.forEach(i=>{
        this.videos.push(i);
        this.ids.push(i.snippet.resourceId.videoId)
      })
      if("nextPageToken" in d.data){
        this.getPlaylist(d.data.nextPageToken);
      }else{
        this.setState({videos:this.videos,id:this.ids})  
        this.setState({isLoading:false})
      }
    })
    .catch(err=>{
      console.log(err)
    })
  }
  componentDidMount(){
    this.getPlaylist();  
  }
  updatePlaylistUrl = (url)=>{
    this.videos = [];
    this.ids = [];
    this.setState({playlistUrl:url,index:0})
    localStorage.setItem("LastSong",0)
    localStorage.setItem("LastPlaylist",url)
    this.getPlaylist();
  }
  updateIndex = (idx)=>{
    this.setState({index:idx})
    localStorage.setItem("LastSong",idx)
    localStorage.setItem("LastSongId",this.ids[idx])
    console.log("Index Changed: "+this.ids[idx]);
  }

  autoPlayIndex = ()=>{
    this.setState({index:parseInt(this.state.index) + 1});
    localStorage.setItem("LastSongId",this.ids[this.state.index])
  }

  showLoading(){
    if(this.state.isLoading){
      return(
        <Loader/>
    )}
    else{
      return(
        <div>
          <Redirect from="/" to="/list"/>
          <Route exact path="/list" render={()=><List videos={this.state.videos} updateIndex={this.updateIndex.bind(this)} curSong={this.state.index}/>}/>
          <Route path="/quicAccess" render={()=><QuickAccess loadPlaylist={this.updatePlaylistUrl.bind(this)}/>}/>
          <Route path="/settings" render={()=><Settings/>}/>
        </div>
    )}
  }

  render(){
    return(
    <div className="mainContainer">
      <Navbar setPlaylist = {this.updatePlaylistUrl}/>
        {
          this.showLoading()                   
        }
      <Videos id={this.state.id} index={this.state.index} autoplayFunc={this.autoPlayIndex.bind(this)} className="videos" lastId={this.state.lastSongId}/>      
    </div>
    )
  }
}