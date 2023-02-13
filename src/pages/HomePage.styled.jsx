import styled from '@emotion/styled';
import { theme } from '../utils/theme';
import { media } from 'components/Layout/Layout.styled';
import mobileBackground from 'images/mobile/wave-mobile.svg';
import tabletBackground from 'images/tablet/wave-tablet.svg';
import desktopBackground from 'images/desktop/wave-desktop.svg';
import ladyWithPetMobile1x from 'images/mobile/lady-with-pet-1x.png';
import ladyWithPetTablet1x from 'images/tablet/lady-with-pet-1x.png';
import ladyWithPetDesktop1x from 'images/desktop/lady-with-pet-1x.png';


export const HomePageWrapper = styled.div`
  // ${media.tablet} {
  //   position: relative;
  //   right: 0;
  //   left: 0;
  //   top: 0;
  //   bottom: 0;
  // }
  // overflow: visible;
`;

export const HomePageBg = styled.div`
  background-image: url(${mobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top 0 left 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-left: -20px;
  margin-right: -20px;
  ${media.tablet} {
    background-position: top 0 left 0;
    display: block;
    background-image: url(${tabletBackground});
    position: absolute;
    right: 0;
    left: 0;
    top: 13vw; // ?
    // width: 100%;
  }
  ${media.desktop} {
    background-image: url(${desktopBackground});
  }
`;
export const HomePageWomanImg = styled.img`
  margin-top: 118px;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  content: url(${ladyWithPetMobile1x});
  ${media.tablet} {
    content: url(${ladyWithPetTablet1x});
    display: block;
    max-width: 100%;
    margin-top: 50vw; //?
  }
  ${media.desktop} {
    content: url(${ladyWithPetDesktop1x});
  }
`;

export const HomePageTitle = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  ${media.tablet} {
    margin-left: 0;
    max-width: 588px;
    margin-top: 88px;
    font-size: 68px;
    line-height: 100px;
  }
  ${media.mobile} {
    max-width: 280px;
  }
`;
