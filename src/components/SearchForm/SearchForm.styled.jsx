import styled from '@emotion/styled';

import { theme } from '../../utils/theme';
import zoom from '../reusable/svg/zoom.svg';

export const SearchTitle = styled.label`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: ${theme.colors.titleText};
`;

export const SearchField = styled.input`
  height: 50px; //rm for build
  font-size: 20px; //rm for built
  display: block;
  margin-top: 28px;
  background: ${theme.colors.accentText};
  background-color: grey; //rm for built
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  padding-left: 12px;
  padding-right: 45px;
  background-image: url(${zoom});
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position: right 15px center;
  &::placeholder {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
    color: #535353;
  }
`;

export const NoticesCategoriesList = styled.ul`
  list-style-type: none;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-basis: calc(100% / 2-32px);
    margin-left: -32px;
  }
  @media (min-width: 1280px) {
    flex-basis: calc(100% / 4-32px);
  }
  `;
  
export const NoticeCategoryItem = styled.li`
  :not(last-child) {
    margin-bottom: 32px;
  }
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
  @media (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const RadioBtnLabel = styled.label`
  :last-of-type {
    display: inline-block;
    margin-left: 2em;
  }
`;

export const RadioBtn = styled.input`
  margin-right: 1em;
`;

export const PhotoPet = styled.img`
  object-fit: cover;
  height: 288px;
  width: 100%;
  display: block;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 288px; 
`;
export const Title = styled.h3`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 20px;
`;
export const PetSpanWrapper = styled.div`
  margin-bottom: 8px;
  :last-of-type {
    margin-bottom: 50px;
  }
`;
export const PetSpan = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #111111;
  :last-child {
    margin-left: 40px;
  }
`;
export const PetDetails = styled.div`
  padding: 20px;
`;
export const PetDetailsButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  height: 38px;
  border: 2px solid ${theme.colors.primary};
  border-radius: 40px;
  background: ${theme.colors.accentText};
  cursor: pointer;
  color: ${theme.colors.primary};
  :last-child {
    color: ${theme.colors.accentButton};
  }
  @media (min-width: 768px) {
    width: 248px;
    margin: 0 auto;
  }
`;
export const PetDetailsButtonText = styled.p`
  color: #f59256;
`;
