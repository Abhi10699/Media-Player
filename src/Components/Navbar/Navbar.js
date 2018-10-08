import React,{Component} from 'react';
import * as smalltalk from 'smalltalk';
import './Navbar.css';

class Navbar extends Component{
    constructor(props){
        super(props);
    }
    parseLink = (url) => {
        return url.split("&")[1];
    }
    updatePlaylist = ()=>{
        smalltalk.prompt("Youtube Playlist URL","Paste URL Here: ")
        .then(value=>{
            this.props.setPlaylist(value);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div>
            <div className="nav mainNav">
               <li>
                <button class="btn btn-default" type="button"><span class="fa fa-search"></span></button>
                <button class="btn btn-success" type="button" data-toggle="modal" data-target="#exampleModal" onClick={this.updatePlaylist}><span class="fa fa-plus"></span></button>
               </li>
             
            </div>      
        </div>
        )
    }
}
export default Navbar;