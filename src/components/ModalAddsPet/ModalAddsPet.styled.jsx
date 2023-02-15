import styled from '@emotion/styled';
// import adver from 'utils/svg/adv.svg';
// import { theme } from 'utils/theme';
// import { media } from 'components/Layout/Layout.styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 240px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 448px;
    height: 505px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 80px;
    padding-right: 80px;
    font-size: 36px;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    width: 448px;
    height: 505px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 80px;
    padding-right: 80px;
    font-size: 36px;
  }
`;

export const Title = styled.h3`
  font-family: Manrope;
  font-weight: 500;
  line-height: 1.3;

  @media screen and (max-width: 767px) {
    margin-bottom: 12px;
    font-size: 24px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 12px;
    font-size: 36px;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
    font-size: 36px;
  }
`;
