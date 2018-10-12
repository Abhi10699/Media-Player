import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

// Components
import Parent from './Components/Parent/Parent';

// Css
import './App.css'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
<div>
    <Parent/>
</div>
</Router>
,document.getElementById('root'));
registerServiceWorker();