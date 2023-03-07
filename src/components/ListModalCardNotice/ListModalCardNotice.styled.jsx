import styled from '@emotion/styled';
import adver from 'utils/svg/adv.svg';
import { theme } from '../../utils';
// import { media } from 'components/Layout/Layout.styled';

export const Container = styled.div`
  @media screen and (max-width: 767px) {
    height: 800px;
    width: 280px;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 20px;
    padding-right: 20px;
    width: 704px;
    height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 540px;
    width: 704px;
  }
`;

export const Wraper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const WraperMain = styled.div``;

export const DragDropContextContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
export const BigImg = styled.img`
  margin-left: 10px;
  display: block;
  object-fit: cover;
  border-radius: 20px;
  height: 150px;
  width: 150px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 328px;
    width: 288px;
  }
  @media screen and (min-width: 1280px) {
    height: 328px;
    width: 288px;
  }
`;
export const Img = styled.img`
  object-fit: cover;
  display: block;
  height: 80px;
  width: 80px;
  margin-bottom: 6px;
  border-radius: 10px;
`;
export const AdvWrapper = styled.div`
  position: absolute;
  background-size: 158px 28px;
  background-image: url(${adver});
  background-repeat: no-repeat;
  width: 158px;
  height: 28px;
  top: 60px;
  left: 20;
`;
export const AdvTitle = styled.span`
  display: block;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: ${theme.colors.titleText};
  margin-left: 20px;
  margin-top: 6px;
`;

export const BoxSecond = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-left: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 20px;
  }
`;
export const Title = styled.h2`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
  @media screen and (max-width: 767px) {
    font-size: 24px;
    margin-top: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;

export const BoxList = styled.div`
  display: flex;
  gap: 50px;
`;

export const Ul = styled.ul`
  margin: 20px 0;
`;

export const Li = styled.li`
  display: flex;
  margin-bottom: 8px;
  overflow: hidden;
  -webkit-line-clamp: 1; /* Число отображаемых строк */
  display: -webkit-box; /* Включаем флексбоксы */
  -webkit-box-orient: vertical; /* Вертикальная ориентация */
  &:last-child {
    margin-bottom: 0;
  }
`;

export const TitleProperty = styled.h3`
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
`;

export const Text = styled.p`
  -webkit-line-clamp: 1; /* Число отображаемых строк */
  display: -webkit-box; /* Включаем флексбоксы */
  -webkit-box-orient: vertical; /* Вертикальная ориентация */
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  /* word-break: break-all; */
  /* word-wrap: break-word; */
`;

export const ContactLink = styled.a`
  color: inherit;
  word-break: break-all;
  &.noHover {
    cursor: text;
    pointer-events: none;
    color: inherit;
  }
  &.hover {
    :hover,
    :focus {
      color: ${theme.colors.accentButton};
    }
  }
`;

export const Box = styled.div`
  margin-top: 28px;
  /* display: flex; */
`;

export const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 20px;
    margin-top: 32px;
    gap: 12px;
  }
`;

export const ButtonModal = styled.button`
  position: relative;
  width: 160px;
  height: 40px;
  display: inline;
  padding: 8px 30px 8px 20px;
  font-weight: ${theme.fontWeights.normal};
  font-size: 16px;
  line-height: ${theme.lineHeights.body};
  letter-spacing: 0.04em;
  color: ${theme.colors.primary};
  background: ${theme.colors.accentText};
  border: 2px solid #f59256;
  border-radius: 40px;
  height: 40px;
  margin: 0;
  cursor: pointer;
  :hover {
    border: 2px solid #ff6101;
    color: #ff6101;
  }
  @media screen and (max-width: 767px) {
    width: 240px;
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const CallModal = styled.a`
  width: 240px;
  height: 40px;
  background-color: #f59256;
  color: #ffffff;
  fill: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  border-radius: 40px;
  padding: 9px 87px;
  cursor: pointer;
  :hover {
    border: 2px solid #ff6101;
    color: #ff6101;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    padding: 9px 47px;
  }
`;

export const AddToFavImg = styled.img`
  position: absolute;
  top: 35%;
  right: 20%;
  height: 14px;
`;
