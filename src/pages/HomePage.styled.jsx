import styled from '@emotion/styled';
import { theme } from '../utils/theme'
import { media } from 'components/Layout/Layout.styled';
import mobileBackground from 'images/mobile/wave-covered.svg';
import mobileBackground2x from 'images/mobile/lady-with-pet-2x.png';
import tabletBackground from 'images/tablet/lady-with-pet-1x.png';
import tabletBackground2x from 'images/tablet/lady-with-pet-2x.png';
import desktopBackground from 'images/desktop/lady-with-pet-1x.png';
import desktopBackground2x from 'images/desktop/lady-with-pet-2x.png';

export const HomePageBg = styled.div`
  background-image: url(${mobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom 0 left 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-left: -20px;
  margin-right: -20px;
  ${media.tablet} {
    background-image: url(${tabletBackground});
    padding-top: 184px;
    padding-bottom: 268px;
    min-height: calc(100vh - 64px);
  }
  ${media.desktop} {
    background-image: url(${desktopBackground});
    padding-top: 50px;
    padding-bottom: 147px;
  }
`;
export const HomePageWomanImg = styled.img`
  margin-top: 58px;
  width: 100%;
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
    max-width: 588px;
  }
  ${media.mobile} {
    max-width: 280px;
  }
`;