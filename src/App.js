import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import ViewNavBar from "./components/NavBar/ViewNavBar";
import ViewPostsContainer from "./components/Main/Posts/ViewPostsContainer";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import ViewNavBarContainer from "./components/NavBar/ViewNavBarContainer";


function App(props) {

  return (


      <div className='container'>
        <div className='app-wrapper'>

          <header className='header_grid'>
            <Header/>
          </header>

          <nav className='nav-bar_grid'>
            <ViewNavBarContainer/>
          </nav>

          <main className='main_grid'>
            <Route path='/dialogs'
                   render={() => <DialogsContainer

                   />}/>
            <Route path='/posts'
                   render={() => <ViewPostsContainer

                   />}/>
          </main>

        </div>
      </div>

  )
}

export default App;
