import React from "react";
import {
  HeroContainerStyled,
  HeroTextStyled,
  HeroImageContainerStyled,
  ImageStyled,
} from "./HeroStyled";

const Hero = () => {
  return (
    <HeroContainerStyled>
      <HeroTextStyled>
        <h1>Elegancia en Cada Fragancia </h1>
        <h2>Explora Nuestra Colección Exclusiva de Perfumes </h2>
        <p>
          Sumérgete en el mundo de las fragancias premium . Encuentra el aroma
          perfecto que refleje tu estilo y personalidad.
        </p>

        <button></button>
      </HeroTextStyled>
      <HeroImageContainerStyled>
        <ImageStyled src="" />
      </HeroImageContainerStyled>
    </HeroContainerStyled>
  );
};

export default Hero;
