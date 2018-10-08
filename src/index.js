import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Parent from './Components/Parent/Parent';

// Css
import './App.css'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<div>
    <Parent/>
</div>
,document.getElementById('root'));
registerServiceWorker();