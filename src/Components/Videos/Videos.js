import React,{Component} from 'react'
import axios from 'axios';
import './videos.css'
import Navabr from '../Navbar/Navbar'


import API_KEY from './key';

class Videos extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            id:'',
            playlistId:null
        }
    }

    componentDidMount(){
        let key = API_KEY
        let playlistId = this.state.playlistId||'PLLdPJGHquctFFaYNmcSIZVjpHxjO9dZTS'
        let URL = 'https://www.googleapis.com/youtube/v3/playlistItems'

        let config = {
            maxResults:50,
            part:'snippet',
            playlistId:playlistId, 
            key:key
        }

        axios.get(URL,{
            params:config
        })
        .then(d=>{
            console.log(d)
            this.setState({items:d.data.items,id:d.data.items[0].snippet.resourceId.videoId})
         
        })

        .catch(err=>{
            console.log(err)
        })
    }

    updateId(e){
        this.setState({id:e.target.attributes.getNamedItem('vidid').value})
        e.preventDefaults;
    }

    updatePlaylistId(url){
        this.setState({playlistId:url})
    }

    render(){
        return(
            
            <div class="iframe_container">
            <Navabr/>
                <div class="list">
                <ul class="list-group">
                    {
                        this.state.items.map((item,index)=>{
                            return(
                                <li className="list-group-item"><a onClick={this.updateId.bind(this)} vidid={item.snippet.resourceId.videoId} href="#">{(index + 1)+")" + " " + item.snippet.title}</a></li>
                            )
                        })
                    }
                </ul>
                </div>
                <div className="iframe">
                <iframe width="100%" height="500" src={"https://www.youtube.com/embed/"+this.state.id+"?rel=0&autoplay=1"} frameborder="0"allowfullscreen="true"></iframe>
                
                </div>
            </div>  
            
        )
    }
}

export default Videos;