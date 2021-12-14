import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@shared/styles/globalStyles";
import Theme from "@shared/styles/theme";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
