import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import logo from '../../assets/logo-vert.png'

export const GlobalStyle = createGlobalStyle`
/* Styles principaux */
* {
    font-family: 'Open Sans', Helvetica, sans-serif;
    color: ${colors.text};
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
}
  body {
    background-color: white;
    max-width: 1440px;
    margin: auto;
    padding: 0 7%;
    line-height: 1;
    height: 100vh;
    background-image: url(${logo});
    background-position: bottom -5rem right -5rem;
    background-repeat: no-repeat;
    background-size: 15rem;
  }
  img {
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  .sr-only {
    position:absolute;
    width:1px;
    height:1px;
    padding:0;
    margin:-1px;
    overflow:hidden;
    clip:rect(0,0,0,0);
    white-space:nowrap;
    border:0
  }
  .main {
    display: flex;
    flex-direction: column;

  }
  ol, ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`
