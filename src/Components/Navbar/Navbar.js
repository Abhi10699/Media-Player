import React,{Component} from 'react';
import Modal from './SearchModal';

import './Navbar.css';


class Navbar extends Component{
    constructor(props){
        super(props);
    }

    // updateLink(){
    //     this.props.updateLink(this.parseLink(link));
    // }

    // parseLink(URL){
    //     return URL.split("&")[1].split("=")[1]
    // }


    changePageItems(){
        this.props.changePage(this.props.nextToken);
        console.log("Changing page");
    }
    render(){
        return(
            <div>
            <div className="nav mainNav">
               <li>
                <button class="btn btn-default" type="button"><span class="fa fa-search"></span></button>
                <button class="btn btn-success" type="button" ><span class="fa fa-plus"></span></button>
               </li>
            </div>
        </div>

        )
    }
}

export default Navbar;