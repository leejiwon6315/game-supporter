import React from "react";
import { HomeViewController } from "./domains/home/Home.view.controller";
import { useHomeViewModel } from "./domains/home/Home.view.model";

function App(): JSX.Element {
  const viewModel = useHomeViewModel();

  return <HomeViewController viewModel={viewModel} />;
}

export default App;
