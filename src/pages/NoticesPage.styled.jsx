import styled from '@emotion/styled';
import { theme } from 'utils/theme';
import { NavLink } from 'react-router-dom';
import zoom from 'utils/svg/zoom.svg';
import { media } from 'components/Layout/Layout.styled';

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
  height: 40px;
  border: 0;
  width: 100%;
  display: block;
  margin-top: 28px;
  background: ${theme.colors.accentText};
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
  ${media.tablet} {
    width: 608px;
    margin-right: 48px;
    margin-left: 48px;
  }
  ${media.desktop} {
    width: 608px;
    margin-right: 320px;
    margin-left: 320px;
  }
`;
export const NoticesNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const NoticesNavUl = styled.ul`
  /* ${media.mobile} {
    position: relative;
  } */
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-top: 28px;
  padding-bottom: 30px;
  ${media.tabletAndDesktop} {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`;
export const NoticesNavLi = styled.li`
  height: 47px;
  :not(:last-child) {
    margin-right: 12px;
    margin-bottom: 12px;
  }
`;
export const NoticesNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding: 10px 28px;
  &.active {
    background-color: #f59256;
  }
`;
export const NoticesNavText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: ${theme.colors.titleText};
`;
export const AddPetToNoticesBtnWrapper = styled.div`
  ${media.mobile} {
    position: fixed;
    left: 220px;
    top: 400px;
    z-index: 10;
  }
  /* width: 176px; */
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;

  ${media.tablet} {
    min-width: 139px;
  }
`;
export const AddPetToNoticesBtn = styled.button`
  ${media.mobile} {
    /* position: absolute; */
    width: 80px;
    height: 80px;
    background: #f59256;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 50%;
    top: 67px;
    right: 0;
    cursor: pointer;
    border: 0;
  }
  width: 44px;
  height: 44px;
  background: #f59256;
  border-radius: 50%;
  cursor: pointer;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddPetToNoticesImg = styled.img`
  ${media.mobile} {
    position: absolute;
    top: 27px;
    right: 28px;
  }
  display: block;
`;

export const AddPetToNoticesText = styled.span`
  ${media.mobile} {
    margin-top: 4px;
    position: absolute;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.35;
    color: ${theme.colors.accentText};
    top: 48px;
    right: 18px;
  }
  ${media.tabletAndDesktop} {
    margin-right: 22px;
    display: block;
    font-size: 20px;
    line-height: 1.35;
    color: ${theme.colors.titleText};
  }
  ${media.desktop} {
    margin-right: 20px;
  }
`;
