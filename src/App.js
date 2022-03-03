import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import ViewPostsContainer from "./components/Main/Posts/ViewPostsContainer";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import ViewNavBarContainer from "./components/NavBar/ViewNavBarContainer";
import UsersContainer from "./components/Main/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {

  return (


    <div className='container'>
      <div className='app-wrapper'>

        <header className='header_grid'>
          <HeaderContainer/>
        </header>

        <nav className='nav-bar_grid'>
          <ViewNavBarContainer/>
        </nav>

        <main className='main_grid'>
          <Route path='/dialogs'
                 render={() => <DialogsContainer

                 />}/>

          <Route path='/posts/:userId?'
                 render={() => <ViewPostsContainer

                 />}/>
          <Route path='/users'
                 render={() => <UsersContainer

                 />}/>
        </main>

      </div>
    </div>

  )
}

export default App;
