import { ChakraProvider, theme } from "@chakra-ui/react";
import "./App.css";
import Paths from "./routes/Paths";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Paths />
      </ChakraProvider>
    </>
  );
}

export default App;
