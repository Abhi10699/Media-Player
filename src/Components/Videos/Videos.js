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
    
    PlayNext(){
      if(this.state > this.props.id.length){
        alert("Playlist Over");
        return;
      }else{
        this.props.autoplayFunc()
      }
    }
    render(){
        return(    
          <div class="iframe_container">  
            <YouTube 
            videoId={this.props.id[this.props.index]} 
            className="iframe" 
            opts={this.opts}
            onEnd={this.PlayNext.bind(this)}>
            </YouTube>
          </div>    
        )
    }
}

export default Videos;