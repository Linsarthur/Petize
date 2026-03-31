import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Themes/Themes.js";

createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    ,
  </React.StrictMode>,
);
