import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyle';
import { Container, HeaderNavigation, NavList, StyledLink } from './App.styled';

const AppLayout = () => {
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

      <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="tomato"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
            }}
            wrapperClassName=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>

      <GlobalStyles />
    </Container>
  );
};

export default AppLayout;
