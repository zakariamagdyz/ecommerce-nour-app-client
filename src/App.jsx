import { createGlobalStyle } from "styled-components";
import RouterConfig from "./components/RouterConfig.jsx";

import { toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

import mediaDevices from "./style/mediaDevices.js";

///////////////////////////////////////////////////////

const global = { createGlobalStyle };

const GlobalStyle = global.createGlobalStyle`

*,*::after,*::before{
  padding:0;
  margin:0;
  box-sizing: inherit;
}

html {
    // make font-size relative to broswser default font-size
   font-size:calc((10 / 16 * 100) * 1%);

  
   @media ${mediaDevices.tabLand}{
    font-size :calc((9/ 16 * 100) * 1%);
   }
  

   @media ${mediaDevices.tabPort}{
    font-size :calc((8 / 16 * 100) * 1%);
   }
 

   @media ${mediaDevices.mobile}{
    font-size :calc((7 / 16 * 100) * 1%);
   }
  
   @media ${mediaDevices.bigDesktop}{
    font-size :calc((12 / 16 * 100) * 1%);
   }
  
  }


body{
  font-family: 'Open Sans Condensed', sans-serif;
  box-sizing: border-box;
  font-size:1.6rem;



}


`;

///////////////////////////////////////////////////////

if (window) {
  injectStyle();
}

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ToastContainer />
      <RouterConfig />
    </div>
  );
};

export default App;
