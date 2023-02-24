import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';

export const ModalAddNoticeWrapper = styled.div`
  width: 280px;
  overflow: ${({ maxHeight }) => (maxHeight ? `auto` : 'hidden')};
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : 'auto')};
  margin: 40px 20px;
  ${media.tabletAndDesktop} {
    width: 608px;
    margin: 40px 80px;
  }
`;
export const BoxWarning = styled.p`
  margin-top: 10px;
  color: red;
  font-weight: 400;
  font-size: 22px;
  // line-height: 1;
`;