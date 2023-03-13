import styled from "styled-components";
import { media } from "components/Layout/Layout.styled";

export const Overlay = styled.div`
position: fixed;
  display: flex;
  justify-Content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #FDF7F2;
  z-index: 10;
  overflow-Y: auto;
`
export const ModalWindow = styled.div`
background-color: #FDF7F2;
position: absolute;
padding: 30px;
z-index: 10;
/* width: 35%; */
/* border-Radius: .5em; */
/* display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #FDF7F2; */
`

export const StyledModalBurger = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  position: relative;
  z-index: 21;
  ${media.tablet} {
    order: +1;
  }
  ${media.desktop} {
    display: none;
  }
`;

// const MODAL_STYLES = {
//   position: "absolute",
//   backgroundColor: "#FFF",
//   padding: "15px",
//   zIndex: "1000",
//   width: "35%",
//   borderRadius: ".5em"
// };

// const OVERLAY_STYLE = {
//   position: "fixed",
//   display: "flex",
//   justifyContent: "center",
//   top: "0",
//   left: "0",
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0,0,0, .8)",
//   zIndex: "1000",
//   overflowY: "auto"
// };

// export const StyledModalBurger = styled.button`
// position: absolute;
// right: 10px;
// top: 10px;
// z-index: 1001;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 2rem;
//   height: 2rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   margin-left: ${({ open }) => open && 'auto'};
//   @media (min-width: 1280px) {
//     display: none;
//   }
//   &:focus {
//     outline: none;
//   }
//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: ${({ open }) => (open ? '#0D0C1D' : '#111111')};
//     border-radius: 10px;
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;
//     :first-child {
//       transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
//     }
//     :nth-child(2) {
//       opacity: ${({ open }) => (open ? '0' : '1')};
//       transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
//     }
//     :nth-child(3) {
//       transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
//     }
//   }
// `;
