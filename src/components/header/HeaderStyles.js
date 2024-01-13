import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainerStyled = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #18191a;
  box-shadow: 4px 4px 6px #131415;
`;

export const LogoContainerStyled = styled.div`
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: yellow;
  border-radius: 20px;
`;

export const LogoImageStyled = styled.img`
  display: flex;
  width: 100%;
  border-radius: 30%;
`;

export const MenuIconContainer = styled(motion(IconButton))`
  && {
    color: red;
    background-color: #ffffff1a;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default HeaderContainerStyled;
