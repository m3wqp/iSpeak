import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Dialogs from "./components/Main/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import ViewNavBar from "./components/NavBar/ViewNavBar";
import ViewPostsContainer from "./components/Main/Posts/ViewPostsContainer";


function App(props) {

  return (

    <BrowserRouter>
      <div className='container'>
        <div className='app-wrapper'>

          <header className='header_grid'>
            <Header/>
          </header>

          <nav className='nav-bar_grid'>
            <ViewNavBar navBar={props.test.navbar.navBar}/>
          </nav>

          <main className='main_grid'>
            <Route path='/dialogs'
                   render={() => <Dialogs dispatch={props.dispatch}
                                          messages={props.test.dialogCon.userMessage}
                                          user={props.test.profileCon.userProfile}
                                          newMessage={props.test.dialogCon.newMessageText}
                   />}/>
            <Route path='/posts'
                   render={() => <ViewPostsContainer dispatch={props.dispatch}
                                            userPost={props.test.postCon.postData}
                                            postNewText={props.test.postCon.postText}

                   />}/>
          </main>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
