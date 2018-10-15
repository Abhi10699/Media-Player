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
                <Link to="/list">
                    <button className="btn btn-primary"
                     type="button"
                     data-toggle="tooltip"
                     data-placement="right" 
                     title="Home"><span className="fa fa-home"></span></button>
                </Link>
            
                <button 
                className="btn btn-primary" 
                type=" button"
                data-toggle="tooltip"
                data-placement="right"
                title="Load Playlist"
                onClick={this.updatePlaylist}><span className="fa fa-plus"></span></button>
                
                <Link to="/quicAccess">
                    <button 
                    className="btn btn-primary" 
                    type="button"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Your Playlists"
                    ><span className="fa fa-list-ul"></span></button>
                </Link>

                <Link to="/settings">
                    <button 
                    className="btn btn-primary"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Settings"
                   >
                    <span className="fa fa-cog"></span>
                    </button>
                
                </Link>
               </li>
             
            </div>      
        </div>
        )
    }
}
export default Navbar;