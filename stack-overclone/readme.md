create root folder
npx create-react-app stack-overcloned
npm i styled-components
npm i styled-reset
===============  App.js ========================

add <Reset /> below <div> on App function 
import { Reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components' on top file

const GlobalStyle = createGlobalStyle`
    body {
        background: #2d2d2d;
        color: #fff;
    }
`
add Global Style below <Reset />
create Header.js
add import font to GlobalStyle

npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
npm i --save @fortawesome/free-brands-svg-icons
## header.js
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'