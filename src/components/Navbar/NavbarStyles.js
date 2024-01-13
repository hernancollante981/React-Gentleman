import styled from "styled-components";

export const NavbarContainerStyled = styled.nav`
  max-width: 400px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    list-style: none;
  }
  & a {
    font-size: 20px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    outline: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const UnorderListStyled = styled.ul`
  padding: 4px;
  display: flex;
  gap: 30px;
`;

export const ListItemStyled = styled.li`
  list-style: none;
`;
