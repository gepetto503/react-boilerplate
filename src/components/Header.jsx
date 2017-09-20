import React from "react";

function Header(props){
  return (
    <div>
      <h1>React BoilerPlate</h1>
      <h3>Environment:</h3>
      <li>Package manager: npm</li>
      <li>Transpiler: Babel</li>
      <li>Module Bundler: Webpack</li>
      <li>Dev Server: Webpack</li>
      <li>HMR: React Hot Loader</li>
    </div>
  );
}

export default Header;
