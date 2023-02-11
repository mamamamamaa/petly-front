import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 42px;
  padding-bottom: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 90px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 70px;
  }
`;

export const MainHeader = styled.h1`
  margin-top: 0;
  margin-bottom: 28px;
  font-weight: 700;
  font-size: 48px;
  color: #111111;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;
