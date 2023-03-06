import styled from '@emotion/styled';
import { theme } from 'utils/theme';

export const Container = styled.div`
  @media screen and (max-width: 767px) {
    height: 670px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 662px;
    width: 608px;
    padding-left: 27px;
    padding-right: 27px;
  }
  @media screen and (min-width: 1280px) {
    height: 502px;
    width: 448px;
    padding-left: 27px;
    padding-right: 27px;
  }
  position: relative;
`;

export const Title = styled.h2`
  text-align: center;
  font-family: Manrope;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Box = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  color: #fdf7f2;
  background-color: #fdf7f2;
  border-radius: 20px;
  @media screen and (max-width: 767px) {
    // width: 208px;
    // height: 208px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    // width: 182px;
    // height: 182px;
  }
  @media screen and (min-width: 1280px) {
    // width: 182px;
    // height: 182px;
  }
`;

export const BoxImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  fill: rgba(17, 17, 17, 0.6);
`;

export const BoxComent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleComent = styled.h2`
  font-family: Manrope;
  font-weight: 500;
  line-height: 1.3;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin-bottom: 8px;
    margin-top: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 12px;
    margin-top: 40px;
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
    margin-top: 40px;
    font-size: 24px;
  }
`;
export const BoxWarning = styled.div`
  color: red;
  font-weight: 400;
  font-size: 12px;
`;

export const BoxButton = styled.div`
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

export const ButtonDone = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 180px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;
  color: white;
  background: #f59256;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  :hover {
    border: 2px solid #ff6101;
    color: #ff6101;
  }
  @media screen and (max-width: 767px) {
    height: 40px;
    width: 240px;
    margin-top: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 44px;
    width: 180px;
  }
  @media screen and (min-width: 1280px) {
    height: 44px;
    width: 180px;
  }
`;
export const ButtonBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;
  color: ${theme.colors.primary};
  background: ${theme.colors.accentText};
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  :hover {
    border: 2px solid #ff6101;
    color: #ff6101;
  }
  @media screen and (max-width: 767px) {
    height: 40px;
    width: 240px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 44px;
    width: 180px;
  }
  @media screen and (min-width: 1280px) {
    height: 44px;
    width: 180px;
  }
`;
// =============
