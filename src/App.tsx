import { ChakraProvider, theme } from "@chakra-ui/react";

import Paths from "./routes/Paths.tsx";
import { UserProvider } from "./context/UserContext.tsx";

const App = () => {
  return (
    <>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <Paths />
        </ChakraProvider>
      </UserProvider>
    </>
  );
};

export default App;
