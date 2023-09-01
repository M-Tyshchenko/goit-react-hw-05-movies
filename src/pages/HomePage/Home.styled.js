import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
`;

export const MovieList = styled.ul`
  /* display: flex;
  flex-direction: column;
  gap: 8px; */
  /* margin-bottom: 16px; */
`;

export const StyledLink = styled(NavLink)`
  &.hover {
    background-color: tomato;
  }
`;

export const MovieListItem = styled.li`
  margin-bottom: 8px;
`;
