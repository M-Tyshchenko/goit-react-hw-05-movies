import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
`;
export const HomeTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

// export const MovieList = styled.ul`

// `;

export const StyledLink = styled(NavLink)`
  &.hover {
    background-color: tomato;
  }
`;

export const MovieListItem = styled.li`
  margin-bottom: 8px;
`;
