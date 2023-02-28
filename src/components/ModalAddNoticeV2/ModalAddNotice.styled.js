import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';

export const ModalAddNoticeWrapper = styled.div`
  width: 280px;
  overflow: ${({ maxHeight }) => (maxHeight ? `auto` : 'hidden')};
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : 'auto')};
  margin: 40px 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none; // diable view of modal scroll line
  }
  ${media.tabletAndDesktop} {
    // overflow: hidden;
    width: 608px;
    margin: 40px 80px;
  }
`;
export const BoxWarning = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  color: red;
  font-weight: 400;
  font-size: 22px;
`;
export const BoxWarningSex = styled.p`
  position: absolute;
  top: 0;
  left: 150px;
  color: red;
  font-weight: 400;
  font-size: 22px;
`;
