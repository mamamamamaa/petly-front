import styled from '@emotion/styled';
import { theme } from '../utils/theme';
import { media } from 'components/Layout/Layout.styled';
import mobileBackground from 'images/mobile/wave-mobile.svg';
import tabletBackground from 'images/tablet/wave-tablet.svg';
import desktopBackgroundLeft from 'images/desktop/wave-group-left-desktop.svg';
import desktopBackgroundRight from 'images/desktop/wave-group-right-desktop.svg';
import ladyWithPetMobile1x from 'images/mobile/lady-with-pet-1x.png';
import ladyWithPetTablet1x from 'images/tablet/lady-with-pet-1x.png';
import ladyWithPetDesktop1x from 'images/desktop/lady-with-pet-1x.png';
import unionHeart from 'images/desktop/heart.svg';

export const HomePageBgMobileAndTablet = styled.div`
  background-image: url(${mobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top -11vw left 0vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-left: -20px;
  margin-right: -20px;
  ${media.tablet} {
    background-position: top -6vw left 0;
    display: block;
    background-image: url(${tabletBackground});
    position: absolute;
    right: -6vw;
    left: 0;
    top: 24vw;
  }
  ${media.desktop} {
    background-image: url(${desktopBackgroundLeft});
    justify-content: space-between;
    padding-right: 16px;
    padding-left: 16px;
    margin-top: 60px;
    justify-content: flex-end;
    align-items: flex-start;
    background-position: top 0vw left -2vw;
    height: 60vh;
    margin-top: 30vh;
  }
`;
export const HomePageWomanWrapper = styled.div`
  ${media.desktop} {
    position: relative;
    right: 0;
    bottom: 0;
  }
`;
export const HomePageWomanImg = styled.img`
  margin-top: 118px;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 26vw;
  content: url(${ladyWithPetMobile1x});
  ${media.tablet} {
    content: url(${ladyWithPetTablet1x});
    display: block;
    max-width: 100%;
    margin-top: 50vw;  
  }
  ${media.desktop} {
    content: url(${ladyWithPetDesktop1x});
    margin-top: -7vh;
  }
`;
export const HomePageUnionHeartSvg = styled.img`
  content: url(${unionHeart});
  position: absolute;
  top: 42px;
  left: 38px;
  ${media.mobileAndTablet} {
    display: none;
  }
`;
export const HomePageTitleMobileAndTablet = styled.h2`
${media.mobile} {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  max-width: 280px;
}  

  ${media.tablet} {
    margin-left: 0;
    max-width: 588px;
    margin-top: 88px;
    font-size: 68px;
    line-height: 100px;
  }
  ${media.desktop} {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
    line-height: 100px;
    color: #000000;
    width: 588px;
    position: absolute;
    top: 160px;
  }
`;
