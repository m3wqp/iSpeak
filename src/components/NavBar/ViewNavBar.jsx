import React from "react";
import NavBar from "./NavBar";


const ViewNavBar = (props) => {
  debugger
  let viewNavBar = props.navBar.map(navBar => <NavBar link={navBar.link} name={navBar.name}/>)

  return (
    <>
      {viewNavBar}
    </>
  );
}

export default ViewNavBar;