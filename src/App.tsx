import { ThemeProvider } from 'styled-components';

import { Navigation } from 'domains/layout/Navigation';
import { Home } from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContext } from 'shared/context';
import { GlobalStyle } from 'shared/styles';
import theme from 'shared/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserContext.Provider value={[]}>
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
