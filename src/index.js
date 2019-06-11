import React from "react";
import ReactDOM from "react-dom";

const title = "Webpack 4 with react starter";

ReactDOM.render(<div>{title}</div>, document.getElementById("app"));

module.hot.accept();
