import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.bgColour};
  transition: background-color 1600ms;
}
`

export default GlobalStyle;