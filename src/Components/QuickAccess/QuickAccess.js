import React,{Component} from 'react';
import Modal from './playlistModal';

export default class QuickAccess extends Component{
  render(){
    return(
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Your Playlists</a>
          <button className="btn" style={{backgroundColor:"black"}} data-toggle="modal" data-target="#exampleModal"><span className="fa fa-plus fa-lg mt-2" style={{color:"white"}}></span></button>
        </nav>
        <Modal id="exampleModal"/>

        <div className="container mt-3">
        <ul class="list-group">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        </div>
      </div>
    )
  }
}