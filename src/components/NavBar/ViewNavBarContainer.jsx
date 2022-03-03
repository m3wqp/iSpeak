import React from "react";
import {connect} from "react-redux";
import NavBar from "./NavBar";





let mapStateToProps = (state) => {
      return{
        navBar:state.navbar.navBar
      }
  }



const ViewNavBarContainer = connect(mapStateToProps)(NavBar)

export default ViewNavBarContainer;