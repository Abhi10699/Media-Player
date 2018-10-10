import React,{Component} from 'react';
import List from '../List/List';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import API_KEY from '../key';
import './Parent.css'

export default class Parent extends Component{
    constructor(){
        super();
				this.videos = []
        this.state =  {
            playlistUrl:"",
            videos:[],
            id:""
        }
    }
    getPlaylist(token){
        let key = API_KEY
        // let playlistId = this.state.playlistId;
        let URL = 'https://www.googleapis.com/youtube/v3/playlistItems'

        let config = {
            maxResults:50,
            part:'snippet,contentDetails',
            playlistId:this.state.playlistUrl || "PLH-MxCdxgrGp8jGqjx_pICATXecnVNGhI", 
            key:key,
            pageToken:token
        }
        axios.get(URL,{
            params:config
        })
        .then(d=>{
            d.data.items.forEach(i=>{
                this.videos.push(i);
            })
            if("nextPageToken" in d.data){
                this.getPlaylist(d.data.nextPageToken);
            }else{
                this.setState({videos:this.videos,id:this.videos[0].snippet.resourceId.videoId})    
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
        this.setState({playlistUrl:url})
        this.getPlaylist();
    }
    updateId = (id)=>{
        this.setState({id:id})
    }
    render(){
        return(
        <div className="mainContainer">
            <Navbar setPlaylist = {this.updatePlaylistUrl}/>
            <List videos = {this.state.videos} firstSong = {this.state.id} updateId = {this.updateId}/>
        </div>
        )
    }
}