import React, {Component} from 'react';
import axios from 'axios';
import API_KEY from '../key';
import './list.css';

// Video Component
import Videos from '../Videos/Videos';

export default class List extends Component{
    
    constructor(){
        super();
        this.videos = []
        this.videosLen = 0;
        this.state = {
            items:[],
            id:''||localStorage.getItem('LastSong'),
            playlistId:null
        }
    }

    getPlaylist(token){
        let key = API_KEY
        let playlistId = 'PL3oW2tjiIxvQ98ZTLhBh5soCbE1mC3uAT' 
        let URL = 'https://www.googleapis.com/youtube/v3/playlistItems'

        let config = {
            maxResults:50,
            part:'snippet,contentDetails',
            playlistId:playlistId, 
            key:key,
            pageToken:token
        }

        axios.get(URL,{
            params:config
        })
        .then(d=>{
            console.log(d)
            this.videosLen+=50;
            d.data.items.forEach(i=>{
                this.videos.push(i);
            })
            if("nextPageToken" in d.data){
                this.getPlaylist(d.data.nextPageToken);
            }else{
                this.setState({items:this.videos,id:this.videos[0].snippet.resourceId.videoId})    
            }
        })

        .catch(err=>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.getPlaylist();
    }
    updateId(e){
        this.setState({id:e.target.attributes.getNamedItem('vidid').value})
        e.preventDefaults;
    }
      render(){
        return(
            <div className="list_container">
                <div className="list_child list">
                    <ul class="list-group">
                        {
                            this.videos.map((item,index)=>{
                                return(
                                    <li className="list-group-item"><a href="#" vidid={item.snippet.resourceId.videoId} onClick={this.updateId.bind(this)}>{(index + 1)+")" + " " + item.snippet.title}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Videos videoId={this.state.id}/>
            </div>

        )
    }
}