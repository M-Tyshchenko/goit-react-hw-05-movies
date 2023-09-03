import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const CastList = styled.ul`
  display: flex;
  /* flex-direction: column; */
  gap: 20px;
  flex-wrap: wrap;
`;

export const CastListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc((100% - 20px) / 7);
`;

export const ActorName = styled.h2`
  font-size: 20px;
`;
