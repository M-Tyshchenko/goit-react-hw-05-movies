import { GlobalStyles } from './GlobalStyle';
import { Container, HeaderNavigation, NavList, StyledLink } from './App.styled';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <Container>
      <HeaderNavigation>
        <NavList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </NavList>
      </HeaderNavigation>
      <Outlet />
      <GlobalStyles />
    </Container>
  );
};
