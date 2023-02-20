import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';
export const UserPageContainer = styled.div`
  ${media.desktop} {
    display: flex;
  }
`;
export const PetsDataWrapper = styled.div`
  margin-left: 32px;
  margin-top: 40px;
  ${media.tablet} {
    margin-top: 20px;
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  }
  ${media.desktop} {
    margin-top: 0;
    width: 862px;
  }
`;
