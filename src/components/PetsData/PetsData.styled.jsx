import styled from '@emotion/styled';
import cross from 'utils/svg/cross.svg';
import { media } from 'components/Layout/Layout.styled';
export const PetsDataTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #000000;
  ${media.tabletAndDesktop} {
    font-size: 28px;
    line-height: 38px;
    color: #111111;
  }
`;
export const PetsDataAddBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PetsDataAddBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const PetsDataAddText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #111111;
  margin-right: 15px;
  ${media.desktop} {
    margin-right: 12px;
  }
`;
export const PetsDataButton = styled.button`
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  background-color: #f59256;
  background-image: url(${cross});
  background-position: center;
  background-size: 16px 16px;
  background-repeat: no-repeat;
  display: inline-block;
  cursor: pointer;
`;
export const PetsDataSection = styled.div`
  background-color: #fdf7f2;
`;

export const Notification = styled.div`
  height: 50px;
  margin-right: auto;
  margin-top: 50px;
  font-weight: 500;
  font-size: 24px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #000000;
  ${media.tablet} {
    margin-top: 100px;
    display: inline-block;
    font-size: 16px;
    line-height: 22px;
  }
`;
