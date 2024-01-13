import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{

}

html{
   scroll-behavior:smooth;
}

body{
    margin: 0;
    padding: 0;
    background-color:white;
    font-family:"Montserrat", sans-serif;
    color: white;
    overflow-x:hidden;
}

`;
