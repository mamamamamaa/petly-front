import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';

export const ModalAddNoticeWrapper = styled.div`
  width: 280px;
  margin: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.tabletAndDesktop} {
    width: 608px;
    margin: 40px 80px;
  }
`;
