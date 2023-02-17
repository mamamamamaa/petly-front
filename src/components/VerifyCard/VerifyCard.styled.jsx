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

export const Paragraph = styled.p`
  margin: 15px 0;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const VerifyButton = styled.button`
  padding: 8px 28px;
  height: 38px;
  font-weight: ${theme.fontWeights.normal};
  font-size: 16px;
  line-height: ${theme.lineHeights.body};
  letter-spacing: 0.04em;
  color: ${theme.colors.primary};
  background: ${theme.colors.accentText};
  border: 2px solid #f59256;
  border-radius: 40px;
  ${({ disabled }) =>
    !disabled
      ? `cursor: pointer;
     :hover {
        border: 2px solid #ff6101;
        color: #ff6101;
  }`
      : `color: #757575;
       border: 2px solid #757575;`}
`;
