import React from 'react';
import { ViewControllerProps } from '@core/ViewController';
import { HomeView } from './Home.view';
import { HomeViewModel } from './Home.view.model';

export const HomeViewController = function HomeViewController({ viewModel }: ViewControllerProps<HomeViewModel>) {
  return <HomeView {...viewModel} />;
};
