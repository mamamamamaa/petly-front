import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';
export const UserPageContainer = styled.div`
  ${media.tablet} {
    margin-top: 88px;
  }
  ${media.desktop} {
    display: flex;
    margin-top: 58px;
  }
`;
export const PetsDataWrapper = styled.div`
  
  margin-top: 40px;
  ${media.tablet} {
    width: 704px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  ${media.desktop} {
    margin-left: 32px;
    width: 821px;
    margin-top: 0;
  }
`;
