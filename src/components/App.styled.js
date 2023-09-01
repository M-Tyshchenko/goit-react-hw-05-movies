import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;

export const HeaderNavigation = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  padding: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: #fff;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  /* color: #394246; */
  font-weight: 700;

  &.active {
    color: tomato;
  }
`;
