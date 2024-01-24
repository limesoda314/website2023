import React from 'react';

import './index.css'; 
import App from './App'; 
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import themeColorStore from './Components/Imports/Variables/themeColor';

const container = document.getElementById('root');
const root = createRoot(container);
root.render( 
    <Provider store={themeColorStore}>
        <App/>
    </Provider>
);

