import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Popper
import 'popper.js'

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