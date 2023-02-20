import styled from '@emotion/styled';
import { theme } from 'utils/theme';
import { NavLink } from 'react-router-dom';
import zoom from 'utils/svg/zoom.svg';
import { media } from 'components/Layout/Layout.styled';

export const NoticesTitle = styled.h2`
    text-align: center;
    font-style: normal;
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.black};
    ${media.mobile} {
      padding-top: 42px;
      font-size: 24px;
      line-height: 33px;
    };
    ${media.tablet} {
      padding-top: 88px;
      font-size: 48px;
      line-height: 66px;
    };
    ${media.desktop} {
        padding-top: 59px;
        font-size: 48px;
        line-height: 66px;
    }
`;

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
  /* width: 100%; */
  display: block;
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
  ${media.mobile} {
    width: 100%;
    min-width: 280px;
    margin-left: auto;
    margin-right: auto;
    /* margin-top: 28px; */
  }
  ${media.tablet} {
    min-width: 608px;
    margin-right: 48px; 
    margin-left: 48px; 
    /* margin-top: 40px; */
  }
  ${media.desktop} {
    width: 608px;
    margin-right: 320px;
    margin-left: 320px;
    /* margin-top: 40px; */
  }
`;
export const NoticesNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 28px;
  padding-bottom: 28px;
  ${media.tabletAndDesktop} {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`;
export const NoticesNavUl = styled.ul`
  /* ${media.mobile} {
    position: relative;
  } */
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const NoticesNavLi = styled.li`
  min-height: 47px;
  ${media.mobile} {
    :not(:last-child) {
    margin-right: 12px;
    margin-bottom: 12px;
  }
  };
  ${media.tablet} {
    margin-top: 12px;
  :not(:last-child) {
    margin-right: 12px;
    /* margin-bottom: 12px; */
  }
  :nth-child(-n+3) {
    margin-top: 0px;
  }
  };
  ${media.desktop} {
    :not(:last-child) {
    margin-right: 12px;
  }
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
  color: ${theme.colors.titleText};
  &.active {
    background-color: #f59256;
    color: ${theme.colors.accentText};
  }
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
`;
export const NoticesNavText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
`;
