import React,{Component} from 'react'
import './videos.css'
import YouTube from 'react-youtube';
class Videos extends Component{
     
    constructor(props) {
        super(props);
        this.opts = {
          playerVars:{
            autoplay:1,
            rel:0
          }
        }
    }

    _onEnd(e){
      console.log("Video Ended.");
    }

    render(){
        return(    
          <div class="iframe_container">  
            <YouTube videoId={this.props.id} className="iframe" opts={this.opts} onEnd={this._onEnd}></YouTube>
          </div>    
        )
    }
}

export default Videos;