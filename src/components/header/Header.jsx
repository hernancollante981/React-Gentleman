import React from "react";
import {
  HeaderContainerStyled,
  LogoContainerStyled,
  LogoImageStyled,
  MenuIconContainer,
} from "./HeaderStyles";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <HeaderContainerStyled>
      <Link to="/">
        <MenuIconContainer whileTap={{ scale: 0.9 }}>
          <MenuIcon />
        </MenuIconContainer>
      </Link>
      <Link to="/">
        <LogoContainerStyled>
          <LogoImageStyled src="../src/assets/navbar__logo 2.png" />
        </LogoContainerStyled>
      </Link>
      <Navbar />
    </HeaderContainerStyled>
  );
};

export default Header;
