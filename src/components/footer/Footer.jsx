import React from "react";
import { FooterContainerStailed, LinksContainerStyled } from "./FooterStyles";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <FooterContainerStailed>
      <LinksContainerStyled>
        <Link to="/">Condiciones</Link>
        <Link to="/">Contactanos</Link>
        <Link to="/">Hola</Link>
      </LinksContainerStyled>
    </FooterContainerStailed>
  );
};

export default Footer;
