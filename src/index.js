import React from 'react';
import store from './state/redux'
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainApp from "./App";


let rerenderEntireTree = (props) => {
  ReactDOM.render(


          <MainApp />

    ,

    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());



reportWebVitals();
