import { ChakraProvider, theme } from "@chakra-ui/react";

import Paths from "./routes/Paths.tsx";

const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Paths />
      </ChakraProvider>
    </>
  );
};

export default App;