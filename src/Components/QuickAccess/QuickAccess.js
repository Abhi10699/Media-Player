import React,{Component} from 'react';
import Modal from './playlistModal';

export default class QuickAccess extends Component{
  
  constructor(){
    super();
    this.state = {
      PlaylistItems:[],
      isEmpty:true
    }
  }

  componentWillMount(){
   this.checkStorage()
  }

  checkStorage = ()=>{
    let storageData = JSON.parse(localStorage.getItem("PlayListData"))
    if(storageData !== null){
      this.setState({isEmpty:false})
      this.setState({PlaylistItems:storageData})
    }
  }

  changePlaylist = (e)=>{
    this.props.loadPlaylist(e.target.attributes.getNamedItem('playlistId').value);
  }

  checkRender(){
    if(this.state.isEmpty){
      return(
        <div>
          <h3>Add Some Playlists to fill this up!</h3>
        </div>
      )
    }else{
      return(
        this.state.PlaylistItems.map(data=>{
          return(
            <li className="list-group-item mt-2">
            {data.alias} 
            <button 
            className="btn btn-primary btn-sm" 
            style={{float:"right"}} 
            playlistId = {data.playlistId}
            onClick = {this.changePlaylist.bind(this)}>Play</button>
            </li>
          )
        })
      )
    }
  }
  
  render(){
    return(
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Your Playlists</a>
          <button className="btn" style={{backgroundColor:"black"}} data-toggle="modal" data-target="#exampleModal"><span className="fa fa-plus fa-lg mt-2" style={{color:"white"}}></span></button>
        </nav>
        <Modal id="exampleModal" newPlaylistLoaded = {this.checkStorage.bind(this)}/>

        <div className="container mt-3">
        <ul class="list-group">
            {
             this.checkRender()
            }
        </ul>
        </div>
      </div>
    )
  }
}