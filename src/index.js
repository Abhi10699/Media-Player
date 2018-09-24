import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Videos from './Components/Videos/Videos';
import Navbar from './Components/Navbar/Navbar';
// Css
import './App.css'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
    <Videos class="main"/>
</div>,document.getElementById('root'));
registerServiceWorker();
