import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";
import ViewNavBar from "./ViewNavBar";





let mapStateToProps = (state) => {
      return{
        navBar:state.navbar.navBar
      }
  }



const ViewNavBarContainer = connect(mapStateToProps)(ViewNavBar)

export default ViewNavBarContainer;