import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { media } from 'components/Layout/Layout.styled';

export const NoticesCategoriesNav = styled.div`
  text-decoration: none;
`;
export const NoticesNavLink = styled(NavLink)``;

export const NoticesCategoriesList = styled.ul`
  list-style-type: none;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-basis: calc(100% / 2-32px);
    margin-left: -32px;
  }
  ${media.desktop} {
    flex-basis: calc(100% / 4-16px);
  }
`;

export const NoticeCategoryItem = styled.li`
  margin-bottom: 32px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
  ${media.tabletAndDesktop} {
    margin-left: 32px;
  }
`;
