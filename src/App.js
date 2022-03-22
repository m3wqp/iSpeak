import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, withRouter} from "react-router-dom";
import ViewPostsContainer from "./components/Main/Posts/ViewPostsContainer";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import ViewNavBarContainer from "./components/NavBar/ViewNavBarContainer";
import UsersContainer from "./components/Main/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";

import {initializeApp} from "./state/reducers/appReducer";
import Spinner from "./common/Spinner";



class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized){
      <Spinner/>
    }

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
            <Route path='/Login'
                   render={() => <Login

                   />}/>
          </main>

        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
) (App);
