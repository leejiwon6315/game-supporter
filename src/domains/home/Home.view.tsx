import React from 'react';
import styled from '@emotion/styled';
import { HomeViewModel } from './Home.view.model';

export const HomeView: React.VFC<HomeViewModel> = React.memo(() => {
  return <HomeContainer></HomeContainer>;
});

const HomeContainer = styled('main')``;
