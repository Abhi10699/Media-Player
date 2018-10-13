import React,{Component} from 'react';
import * as smalltalk from 'smalltalk';
import './Navbar.css';
// Jquery
import $ from 'jquery';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Navbar extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        $('[data-toggle="tooltip"]').tooltip()
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
                    <button class="btn btn-primary"
                     type="button"
                     data-toggle="tooltip"
                     data-placement="right" 
                     title="Home"><span class="fa fa-home"></span></button>
                </Link>
            
                <button 
                class="btn btn-success" 
                type=" button"
                data-toggle="tooltip"
                data-placement="right"
                title="Load Playlist"
                onClick={this.updatePlaylist}><span class="fa fa-plus"></span></button>
                
                <Link to="/quicAccess">
                    <button 
                    class="btn btn-default" 
                    type="button"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Your Playlists"
                    ><span class="fa fa-list-ul"></span></button>
                </Link>
               </li>
             
            </div>      
        </div>
        )
    }
}
export default Navbar;