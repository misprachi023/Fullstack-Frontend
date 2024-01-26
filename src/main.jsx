import React from "react";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
		<ChakraProvider>
			<BrowserRouter>
				<App /> 
			</BrowserRouter>
		</ChakraProvider>
	
);
