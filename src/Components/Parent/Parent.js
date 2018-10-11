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
        this.ids = []
        this.state =  {
            playlistUrl:"",
            videos:[],
            id:[],
            index:0
        }
    }
    getPlaylist(token){
        let key = API_KEY
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
                this.ids.push(i.snippet.resourceId.videoId)
            })
            if("nextPageToken" in d.data){
                this.getPlaylist(d.data.nextPageToken);
            }else{
                this.setState({videos:this.videos,id:this.ids})    
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
    updateIndex = (idx)=>{
        this.setState({index:idx})
        console.log("Index Changed: "+idx);
    }
    render(){
        return(
        <div className="mainContainer">
            <Navbar setPlaylist = {this.updatePlaylistUrl}/>
            <List 
            videos = {this.state.videos} 
            SongsIds = {this.state.id} 
            updateIndex = {this.updateIndex}
            curIndex = {this.state.index}
            />
        </div>
        )
    }
}