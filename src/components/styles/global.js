/** @format */

import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a{
  text-decoration: none;
  color:inherit;
}

li{
  list-style: none;
}

body{
  width: 100vw;
  height: auto;
  font-family: 'Segoe UI';
  background-color:#215db7;
  overflow-x: hidden;
}
`
