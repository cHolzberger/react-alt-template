import React from "react";
import * as ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MuiHello from "./components/MuiHello";

ReactDOM.render(
 <MuiThemeProvider>
    <MuiHello />
	</MuiThemeProvider>,
    document.getElementById("example")
);
