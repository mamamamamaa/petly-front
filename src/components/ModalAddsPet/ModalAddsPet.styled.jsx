import styled from '@emotion/styled';
// import adver from 'utils/svg/adv.svg';
// import { theme } from 'utils/theme';
// import { media } from 'components/Layout/Layout.styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  font-family: Manrope;
  font-weight: 500;
  line-height: 1.3;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    margin-bottom: 28px;
    font-size: 24px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 40px;
    font-size: 36px;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
    font-size: 36px;
  }
`;
