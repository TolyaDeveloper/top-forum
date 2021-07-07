import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    min-width: 320px;
    color: #323232;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    font-weight: 300;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`

export default GlobalStyles