import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
import zoom from '../../utils/svg/zoom.svg';
import { NavLink } from 'react-router-dom';


export const NoticesCategoriesNav = styled.div`
  text-decoration: none;
`;
export const NoticesNavLink = styled(NavLink)``;

export const NoticesSearch = styled.label`
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
