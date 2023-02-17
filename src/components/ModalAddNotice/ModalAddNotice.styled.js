import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';

export const ModalAddNoticeWrapper = styled.div`
  width: 280px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.tabletAndDesktop} {
    width: 608px;
    padding: 40px 80px;
  }
`;

export const ModalAddNoticeTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #111111;
  margin-bottom: 20px;
  ${media.tabletAndDesktop} {
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    color: #000000;
  }
`;
export const ModalAddNoticeText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 20px;
  ${media.tabletAndDesktop} {
    font-size: 20px;
    line-height: 27px;
    color: #000000;
    margin-bottom: 28px;
  }
`;
