import React from "react";
import ReactDOM from "react-dom";
import './style.scss';

const title = "Webpack 4 with react starter";

ReactDOM.render(<div>{title}</div>, document.getElementById("app"));

module.hot.accept();
