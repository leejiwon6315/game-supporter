import styled from 'styled-components';

export const Navigation = function navigation() {
  return (
    <NavigationContainer>
      <MenuSection>
        <Logo>Game-Supporter</Logo>
      </MenuSection>
      <UserSection></UserSection>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.nav`
  width: 100%;

  @media (min-width: ${({ theme: { device } }) => device.pc.minWidth}px) {
    display: flex;
    justify-content: space-between;
    padding: 0 ${({ theme }) => theme.spacing(10)};
  }
`;

const MenuSection = styled.div``;

const UserSection = styled.div``;

const Logo = styled.button``;
