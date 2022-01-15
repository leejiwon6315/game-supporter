import React from 'react';
import styled from '@emotion/styled';
import { Navigation } from '../layout/Navigation';
import { HomeViewModel } from './Home.view.model';

export const HomeView: React.VFC<HomeViewModel> = React.memo(() => {
  return (
    <HomeContainer>
      <Navigation />
    </HomeContainer>
  );
});

const HomeContainer = styled('main')``;
