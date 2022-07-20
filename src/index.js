import React from 'react';
import * as ReactDOMClient from 'react-dom/client'
import { HashRouter } from 'react-router-dom';

import App from './App';
import './index.css';

ReactDOMClient.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>
);