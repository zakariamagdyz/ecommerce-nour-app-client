import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import RouterConfig from "./components/RouterConfig.jsx";

import mediaDevices from "./style/mediaDevices.js";
import Newsletter from "./components/Newsletter.jsx";
import Announcement from "./components/Announcement.jsx";
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

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Announcement />
      <RouterConfig />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
