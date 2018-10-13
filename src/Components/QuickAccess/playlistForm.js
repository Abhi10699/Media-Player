import React,{Component} from 'react';

export default class PlaylistForm extends Component{
  render(){
    return(
      <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Youtube Playlist URL</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a youtube playlist Url "/>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Name</label>
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter a name to identify your playlist"/>
      </div>
    </form>
    )
  }
}