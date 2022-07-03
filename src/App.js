import { ChakraProvider, theme } from '@chakra-ui/react';
import { Home } from './screen/home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
