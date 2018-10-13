import React, { Component } from "react";

class Modal extends Component {
 
  constructor(){
    super();
    this.state = {
      isErr:null
    }
  }

  parseLink = (url)=>{
    return url.split("?")[1].split("=")[1];
  }

  savePlaylistInfo = ()=>{
    let urlId = this.refs.YTUrl.value;
    let alias = this.refs.alias.value;

    if(urlId == "" || alias == ""){
        this.setState({isErr:true})
    }else{
      let PlaylistID = this.parseLink(urlId);
      let Data = [{playlistId:PlaylistID,alias:alias}];

      if(!localStorage.getItem("PlayListData")){
        localStorage.setItem("PlayListData",JSON.stringify(Data))
      }else{
        let retrievedData = JSON.parse(localStorage.getItem("PlayListData"))
        retrievedData.push({playlistId:PlaylistID,alias:alias})
        localStorage.setItem("PlayListData",JSON.stringify(retrievedData))
        this.setState({isErr:false})
        this.props.newPlaylistLoaded()
      }
    }
  }

  checkErr(){
    if(this.state.isErr && this.state.isErr != null){
      return(
        <div class="alert alert-danger" role="alert">
          Please Enter URL and Name
        </div>
      )
    }
  }

  render() {
    return (
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add PlayList
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Youtube Playlist URL</label>
                <input type="text" class="form-control" 
                aria-describedby="emailHelp" 
                placeholder="Enter a youtube playlist Url " ref="YTUrl"/>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input type="text" class="form-control" 
                ref="alias"  
                placeholder="Enter a name to identify your playlist"/>
              </div>
              {
                this.checkErr()           
              }
            </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={this.savePlaylistInfo.bind(this)}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
