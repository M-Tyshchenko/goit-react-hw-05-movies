import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const BackBtn = styled(NavLink)`
  display: flex;
  gap: 4px;
  align-items: center;

  width: fit-content;
  padding: 4px 8px;
  margin-bottom: 20px;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background-color: #fff;
`;

//Poster and description//
export const Hero = styled.div`
  display: flex;
  gap: 20px;
`;
export const HeroDescrContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
`;

export const AdditionalInfoList = styled.ul`
  margin-top: 12px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;
