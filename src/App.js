import React, {Suspense} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import ViewNavBarContainer from "./components/NavBar/ViewNavBarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./state/reducers/appReducer";
import Spinner from "./common/Spinner";
import store from "./state/redux";



const DialogsContainer = React.lazy(() => import('./components/Main/Dialogs/DialogsContainer'));
const ViewPostsContainer = React.lazy(() => import('./components/Main/Posts/ViewPostsContainer'));
const UsersContainer = React.lazy(() => import('./components/Main/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
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
            <Suspense fallback={<Spinner/>}>
              <Switch>

                <Route exact path='/'
                       render={() => <Redirect to={"/posts"}/>}/>

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
                <Route path='*'

                       render={() => <div>404 NOT FOUND</div>}/>
                </Switch>
            </Suspense>
          </main>

        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);


const MainApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
}

export default MainApp