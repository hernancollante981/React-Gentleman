import styled from "styled-components";

export const FooterContainerStailed = styled.footer`
  width: 100%;
  height: 50px;
  background-color: #131415;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinksContainerStyled = styled.div`
  display: flex;
  gap: 30px;
  & a {
    text-decoration: none;
    color: white;
  }
`;

export default FooterContainerStailed;
