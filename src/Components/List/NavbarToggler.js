import React,{Component} from 'react';

export default class NavbarToggle extends Component{
  constructor(){
    super();
  }
  render(){
    return(
       <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Now Playing: { parseInt(this.props.curSong) + 1}</a>
            </li>
          </ul>
      </div>
    )
  }
}