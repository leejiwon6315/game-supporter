import { Global, ThemeProvider } from '@emotion/react';
import { Navigation } from 'domains/layout/Navigation';
import { Home } from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { globalStyle, theme } from 'shared/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
