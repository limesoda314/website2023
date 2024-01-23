import React from 'react';

import './index.css'; 
import App from './App'; 
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import colorValueStore from './Components/Imports/Variables/themeColor';

const container = document.getElementById('root');
const root = createRoot(container);
root.render( 
    <Provider store={colorValueStore}>
        <App/>
    </Provider>
);

