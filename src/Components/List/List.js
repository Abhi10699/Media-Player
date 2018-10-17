import React, {Component, Fragment} from 'react';
import NavbarToggle from './NavbarToggler' 

import './list.css';

export default class List extends Component{  
  constructor(){
    super();
    this.state ={
      id:""
    }
  }

  updateId(e){
    let index = this.props.updateIndex;
    index(e.target.attributes.getNamedItem('vidIndex').value);
    e.preventDefaults;
  }

  componentDidMount(){
    this.setState({id:this.props.curSong})
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props,state)
    if(props.curSong !== state.id){
      return{id:props.curSong}
    }
  }

  renderList(){
    return(
      <ul class="list-group">
        {
          this.props.videos.map((item,index)=>{
            return(
              <li className="list-group-item">
                <a className="link" 
                  vidid={item.snippet.resourceId.videoId} 
                  vidIndex={index} 
                  onClick={this.updateId.bind(this)}>
                  {(index + 1)+")" + " " + item.snippet.title}
                </a>
              </li>
            )
          }
        )
      }
    </ul>)
  }
  render(){
    return(
      <Fragment>
          <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Videos</a>
            <button class="navbar-toggler" 
              type="button" data-toggle="collapse" 
              data-target="#navbarTogglerDemo01">
              <span class="navbar-toggler-icon"></span>
            </button>
            <NavbarToggle id="navbarTogglerDemo01" curSong={this.state.id} Videos = {this.props.videos}/>
        </nav>
        <div className="list_container">
          <div className="list_child list">
            {this.renderList()}
          </div>
        </div>
    </Fragment>
  )}
}