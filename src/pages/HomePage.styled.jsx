import styled from '@emotion/styled';
import { theme } from 'utils/theme';
import { media } from 'components/Layout/Layout.styled';
import mobileBackground from 'images/mobile/wave-mobile.svg';
import tabletBackground from 'images/tablet/wave-tablet.svg';
import desktopBackground from 'images/desktop/wave-group-desktop.svg';
import ladyWithPetMobile1x from 'images/mobile/lady-with-pet-1x.png';
import ladyWithPetMobile2x from 'images/mobile/lady-with-pet-2x.png';
import ladyWithPetTablet1x from 'images/tablet/lady-with-pet-1x.png';
import ladyWithPetTablet2x from 'images/tablet/lady-with-pet-2x.png';
import ladyWithPetDesktop1x from 'images/desktop/lady-with-pet-1x.png';
import ladyWithPetDesktop2x from 'images/desktop/lady-with-pet-2x.png';
import unionHeart from 'images/desktop/heart.svg';

export const HomePageBg = styled.div`
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
    background-image: url(${tabletBackground});
    max-width: 768px;
    background-position: 50% bottom;
    background-size: contain;
    height: auto;
    justify-content: flex-end;
    transform: scale(1.5);
  }
  ${media.desktop} {
    position: relative;
    background-image: url(${desktopBackground});
    // height: 35vmax; //woman togather with rainbow move Y 35
    margin-left: 0vmax; //woman togather with rainbow move X 35
    // width: 95vmax; //woman togather with rainbow cut X
    margin-top: 0vmax; //woman togather with rainbow move Y
    max-width: 1280px;
    background-position: 50% bottom;
    background-size: contain;
    max-height: 768px;
    justify-content: flex-end;
  }
`;
export const HomePageWomanWrapper = styled.div`
  ${media.desktop} {
    position: relative;
    left: 56px;
    bottom: 0;
    width: 590px;
    max-height: 640px;
  }
`;
export const HomePageWomanImg = styled.img`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 26vw;
  content: url(${ladyWithPetMobile1x});
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url(${ladyWithPetMobile2x});
  }
  ${media.tablet} {
    content: url(${ladyWithPetTablet1x});
    display: block;
    margin-top: auto;
    transform: scale(70%) translate(0, 180px);
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url(${ladyWithPetTablet2x});
    }
  }
  ${media.desktop} {
    content: url(${ladyWithPetDesktop1x});
    max-height: 550px;
    width: auto;
    position: relative;
    margin-top: 0vw;
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url(${ladyWithPetDesktop2x});
    }
  }
`;
export const HomePageUnionHeartSvg = styled.img`
  content: url(${unionHeart});
  position: absolute;
  top: 0; //heart
  left: 0; //heart

  ${media.mobileAndTablet} {
    display: none;
  }
`;
export const HomePageTitle = styled.h2`
  ${media.mobile} {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: ${theme.colors.black};
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    max-width: 280px;
  }

  ${media.tablet} {
    margin-left: 0;
    width: 588px;
    margin-top: 160px;
    font-family: 'Manrope';
    font-style: normal;
    color: #000000;
    font-weight: 700;
    font-size: 68px;
    line-height: 100px;
  }
  ${media.desktop} {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
    line-height: 100px;
    color: ${theme.colors.black};
    width: 588px;
    position: absolute;
    top: 110px;
  }
`;
