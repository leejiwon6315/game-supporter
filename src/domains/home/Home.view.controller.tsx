import React from "react";
import { ViewControllerProps } from "@core/ViewController";
import { HomeView } from "./Home.view";
import { HomeViewModel } from "./Home.view.model";

function HomeViewController({ viewModel }: ViewControllerProps<HomeViewModel>) {
  return <HomeView {...viewModel} />;
}

export default React.memo(HomeViewController);
