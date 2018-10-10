import React, {Component, Fragment} from 'react';
import './list.css';
// Video Component
import Videos from '../Videos/Videos';
export default class List extends Component{
    
    constructor(){
        super();
        this.state ={
            id:""
        }
    }
    updateId(e){
        this.props.updateId(e.target.attributes.getNamedItem('vidid').value);
        e.preventDefaults;
    }
      render(){
        return(
          <Fragment>
            <div className="list_container">
                <div className="list_child list">
                    <ul class="list-group">
                        {
                            this.props.videos.map((item,index)=>{
                                return(
                                    <li className="list-group-item">
                                    <a href="#" vidid={item.snippet.resourceId.videoId}
                                     onClick={this.updateId.bind(this)}>{(index + 1)+")" + " " + item.snippet.title}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Videos id={this.props.firstSong}/>
            </div>
        </Fragment>
        )
    }
}