import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const CastList = styled.ul`
  display: flex;
  /* flex-direction: column; */
  gap: 40px;
  flex-wrap: wrap;
`;

export const CastListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 150px;
`;

export const NoImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 225px;
`;

export const ActorName = styled.h2`
  font-size: 20px;
  width: 150px;
  margin-bottom: 10px;
`;
