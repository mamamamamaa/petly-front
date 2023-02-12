import styled from '@emotion/styled';

export const StyledList = styled.ul`
  display: flex;
  gap: 12px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;
