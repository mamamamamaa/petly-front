import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { media } from 'components/Layout/Layout.styled';

export const NoticesCategoriesNav = styled.div`
  text-decoration: none;
`;
export const NoticesNavLink = styled(NavLink)``;

export const NoticesCategoriesList = styled.ul`
  list-style-type: none;
  padding-bottom: 100px;
  ${media.mobile} {
    display: grid;
    grid-gap: 32px;
  }
  ${media.tablet} {
    display: grid;
    grid-gap: 32px;
    max-width: calc(100vw - 32px);
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
    /* display: flex;
    flex-wrap: wrap;
    flex-basis: calc(100% / 2-32px);
    :nth-last-child(2n) { 
      margin-left: 32px;

    } */
  }
  ${media.desktop} {
    display: grid;
    grid-gap: 32px;
    max-width: calc(100vw - 32px);
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    /* flex-basis: calc(100% / 4-16px);
    padding-bottom: 200px; */
  }
`;

export const NoticeCategoryItem = styled.li`
  /* margin-bottom: 32px; */
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
  ${media.tablet} {
    /* :nth-of-type(2n) {
      margin-left: 32px;
    }  */
  }
`;
