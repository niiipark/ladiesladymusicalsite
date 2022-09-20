import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink className="Nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="Nav-link" to="/get-involved">
            Get Involved
          </NavLink>
          <NavLink className="Nav-link" to="/cast-and-crew">
            Cast and Crew
          </NavLink>
          <NavLink className="Nav-link" to="/demos">
            Demos
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
