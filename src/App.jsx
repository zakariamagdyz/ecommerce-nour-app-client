import { createGlobalStyle } from "styled-components";
import RouterConfig from "./components/RouterConfig.jsx";

import { getUserState } from "./redux/user/actions.js";
import { connect } from "react-redux";
import { useEffect } from "react";

import mediaDevices from "./style/mediaDevices.js";

///////////////////////////////////////////////////////

const global = { createGlobalStyle };

const GlobalStyle = global.createGlobalStyle`

*,*::after,*::before{
  padding:0;
  margin:0;
  box-sizing: inherit;
}


:root{
  --err-color:#ff0000;
  --success-color:#4BB543 ;
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

const App = ({ getAuthState }) => {
  useEffect(() => {
    getAuthState();
  }, [getAuthState]);

  return (
    <div>
      <GlobalStyle />
      <RouterConfig />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAuthState: () => dispatch(getUserState()),
});

export default connect(null, mapDispatchToProps)(App);
