import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider} from 'react-redux'
import { createStore } from 'redux';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { searchRobots } from './reducers'

const store = createStore(searchRobots);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>    
    , document.getElementById('root'));


reportWebVitals();
