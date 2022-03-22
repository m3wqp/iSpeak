import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
  auth: state.auth.isAuth,
})


export const withAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.auth) return <Redirect to={"/Login"}/>

      return <Component {...this.props}/>
    }
  }

 let ConnectAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectAuthRedirectComponent;
}

