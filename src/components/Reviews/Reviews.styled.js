import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  gap: 20px;
`;

export const ReviewsListItem = styled.li`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ReviewTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 4px;
`;
