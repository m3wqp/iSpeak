import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {logout, setUserDate} from "../../state/reducers/auth-Reducer";
import {compose} from "redux";



class HeaderComponent extends React.Component {



  render() {

    return (
      <Header {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => {

  return {
    navLink: state.header.navLinkItems,
    auth: state.auth
  }

}

export default compose(
  connect(mapStateToProps, {setUserDate, logout})
)(HeaderComponent)