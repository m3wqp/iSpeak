import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import ViewNavBar from "./components/NavBar/ViewNavBar";
import ViewPostsContainer from "./components/Main/Posts/ViewPostsContainer";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";


function App(props) {

  return (

    <BrowserRouter>
      <div className='container'>
        <div className='app-wrapper'>

          <header className='header_grid'>
            <Header/>
          </header>

          <nav className='nav-bar_grid'>
            <ViewNavBar navBar={props.store.navbar.navBar}/>
          </nav>

          <main className='main_grid'>
            <Route path='/dialogs'
                   render={() => <DialogsContainer store={props.test}

                   />}/>
            <Route path='/posts'
                   render={() => <ViewPostsContainer store={props.test}

                   />}/>
          </main>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
