import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBBtnGroup,
  MDBIcon,
} from "mdbreact";

import "./nav-bar.scss";

export default function NavBar() {
  return (
    <MDBNavbar
      color="indigo"
      dark
      expand="md"
      className="justify-content-between nav-bar"
    >
      <MDBNavbarBrand>
        <strong className="white-text">Restoran name</strong>
      </MDBNavbarBrand>
      <MDBBtnGroup>
        <MDBBtn gradient="peach" className="nav-bar-buttons">
          <MDBIcon icon="clipboard-list" size="2x" />
        </MDBBtn>
        <MDBBtn gradient="purple" className="nav-bar-buttons">
          <MDBIcon icon="info-circle" size="2x" />
        </MDBBtn>
        <MDBBtn gradient="near-moon" className="nav-bar-buttons">
          <MDBIcon icon="shopping-basket" size="2x" />
        </MDBBtn>
      </MDBBtnGroup>
    </MDBNavbar>
  );
}
