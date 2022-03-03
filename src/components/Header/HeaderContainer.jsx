import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setUser, setUserDate} from "../../state/reducers/auth-Reducer";
import {usersApi} from "../../api/api";


class HeaderComponent extends React.Component {


  componentDidMount() {
    this.props.setUser()
  }


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


const HeaderContainer = connect(mapStateToProps, {setUserDate, setUser})(HeaderComponent)


export default HeaderContainer;