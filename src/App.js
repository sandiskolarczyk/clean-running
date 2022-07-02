import { ChakraProvider, theme } from '@chakra-ui/react';
import { Home } from './screens/home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
