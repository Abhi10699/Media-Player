import React,{Component} from 'react';
import * as smalltalk from 'smalltalk';
import './Navbar.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                <Link to="/">
                    <button class="btn btn-primary" type="button"><span class="fa fa-home"></span></button>
                </Link>
                <button class="btn btn-success" type=" button"onClick={this.updatePlaylist}><span class="fa fa-plus"></span></button>
                <Link to="/quicAccess">
                    <button class="btn btn-default" type="button"><span class="fa fa-list-ul"></span></button>
                </Link>
               </li>
             
            </div>      
        </div>
        )
    }
}
export default Navbar;