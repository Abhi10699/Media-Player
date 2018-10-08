import React,{Component} from 'react'
import './videos.css'
class Videos extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            
            <div class="iframe_container">
                <div className="iframe">
                <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/"+this.props.id+"?rel=0&autoplay=1"} frameBorder="0"allowFullscreen="true" id="Iframe"></iframe>
                </div>
            </div>  
            
        )
    }
}

export default Videos;