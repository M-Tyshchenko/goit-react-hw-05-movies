import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
`;
export const Form = styled.form`
  display: flex;
  gap: 20px;
`;

export const FormInput = styled.input`
  width: 400px;
  padding: 4px 8px;
  border: 1px solid rgba(27, 31, 35, 0.15);
`;

export const StyledLink = styled(NavLink)`
  &.hover {
    background-color: tomato;
  }
`;

export const SearchBtn = styled.button`
  width: 100px;
  padding: 4px 8px;
  border: 0 solid rgba(27, 31, 35, 0.15);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background-color: #fff;
  color: inherit;

  &.hover {
    color: tomato;
  }
`;
