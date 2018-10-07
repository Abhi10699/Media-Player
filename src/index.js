import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Videos from './Components/Videos/Videos';
import Navbar from './Components/Navbar/Navbar';
import List from './Components/List/List';

// Css
import './App.css'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<div className="mainContainer">
    <Navbar />
    <List/>
</div>
,document.getElementById('root'));
registerServiceWorker();
