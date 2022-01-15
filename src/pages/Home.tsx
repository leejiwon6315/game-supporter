import React from 'react';
import { HomeViewController } from '@domains/home/Home.view.controller';
import { useHomeViewModel } from '@domains/home/Home.view.model';

export const Home = function Home(): JSX.Element {
  const viewModel = useHomeViewModel();

  return <HomeViewController viewModel={viewModel} />;
};
