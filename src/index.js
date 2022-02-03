import React from 'react';
import store from './state/redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'



 let rerenderEntireTree = (props) => {
  ReactDOM.render(
    <React.StrictMode>
      <App test={store}  store={props} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})

reportWebVitals();
