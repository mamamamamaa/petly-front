import styled from '@emotion/styled';
import { media } from '../Layout/Layout.styled';
import { theme } from '../../utils';
import mobileBackground from '../../images/mobile/log-registr-mobile.png';
import tabletBackground from '../../images/tablet/log-registr-tablet.png';
import desktopBackground from '../../images/desktop/log-registr-desktop.png';

export const VerifyContainer = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 58px);
  background-image: url(${mobileBackground});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  ${media.mobile} {
    margin-top: 50px;
    padding: 0 20px;
  }
  ${media.tablet} {
    padding: 0 20px;
  }
  ${media.tabletAndDesktop} {
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

export const VerifyCardContainer = styled.div`
  width: auto;
  padding: 20px 30px;
  border-radius: 20px;
  background-color: ${theme.colors.accentText};
  ${media.mobile} {
    margin-bottom: 42px;
  }
  ${media.tablet} {
    width: 100%;
    order: -1;
  }
  ${media.desktop} {
    margin-bottom: 27px;
  }
`;

export const Heading = styled.h1`
  margin: 20px auto 20px 0;
`;

export const Paragraph = styled.p``;
