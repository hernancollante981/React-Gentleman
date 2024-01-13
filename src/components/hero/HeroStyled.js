import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;

  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroTextStyled = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  padding: 10px;
  gap: 10px;
  margin-top: 20px;

  & h1 {
    display: flex;
    font-size: 2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(45deg, #8e44ad, #ffd700);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & h2 {
    margin: 0;
    font-size: 1.5rem;
    color: white;
  }
  & p {
    font-size: 14px;
    font-weight: 400;
  }
  & button {
    border-radius: 10px;
    padding: 10px 15px;
    color: white;
    background-color: black;
  }

  @media (max-width: 1000px) {
    & h1 {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const HeroImageContainerStyled = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: aqua;
  padding: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImageStyled = styled.img`
  display: flex;
  width: 100%;
`;
export default HeroContainerStyled;
