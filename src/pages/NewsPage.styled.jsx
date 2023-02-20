import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 21px;
  padding-bottom: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 45px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 35px;
  }
`;

export const MainHeader = styled.h1`
  //margin-top: 0;
  //margin-bottom: 28px;
  //font-weight: 700;
  //font-size: 48px;
  //color: #111111;
  //font-size: 24px;
  //@media screen and (min-width: 768px) {
  //  font-size: 40px;
  //  margin-bottom: 40px;
  //}

  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 66px;
  margin-bottom: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 28px;
  }
`;
