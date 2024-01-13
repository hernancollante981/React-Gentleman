import React from "react";
import {
  ListItemStyled,
  NavbarContainerStyled,
  UnorderListStyled,
} from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainerStyled>
      <UnorderListStyled>
        <ListItemStyled>
          <Link to="/">Home</Link>
        </ListItemStyled>
        <ListItemStyled>
          <Link to="/Productos">Products</Link>
        </ListItemStyled>
      </UnorderListStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
