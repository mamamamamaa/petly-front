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
  font-size: 40px; //rm for built
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

export const NoticesCategoriesList = styled.ul``;

export const NoticeCategoryItem = styled.li``;

export const RadioBtnLabel = styled.label`
  :last-of-type {
    display: inline-block;
    margin-left: 2em;
  }
`;

export const RadioBtn = styled.input`
  margin-right: 1em;
`;
