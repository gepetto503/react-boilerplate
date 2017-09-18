//index.jsx is the entry point, a special type of file.  it's only job is to render the parent component (in this case, App.jsx).  react can only render one component at a time, but that component may have limitless children and grandchildren

//imports React libraries from npm devDependencies (found in package.json)
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";



ReactDOM.render(
  //what to render
  <App/>,
  //where to render it
  document.getElementById('react-app-root')
);
