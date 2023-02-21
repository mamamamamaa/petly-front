import styled from '@emotion/styled';
import { theme } from 'utils/theme';
import { media } from 'components/Layout/Layout.styled';

export const AddPetToNoticesBtnWrapper = styled.div`
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  ${media.mobile} {
    position: fixed;
    left: 68%;
    top: 68%;
    z-index: 10;
  }
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
    top: 20px;
    right: 28px;
  }
  display: block;
`;

export const AddPetToNoticesText = styled.span`
  ${media.mobile} {
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
