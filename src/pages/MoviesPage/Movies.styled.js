import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
`;

export const FormInput = styled.input`
  width: 400px;
`;

export const StyledLink = styled(NavLink)`
  &.hover {
    background-color: tomato;
  }
`;
