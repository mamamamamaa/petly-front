import { useLocation } from 'react-router-dom';
import { NavList, NavListItem, NavigLink } from './Navigation.styled';

const Navigation = ({ close }) => {
  const { pathname } = useLocation();

  return (
    <NavList>
      <NavListItem>
        <NavigLink to="/news" onClick={close}>
          News
        </NavigLink>
      </NavListItem>
      <NavListItem>
        <NavigLink
          to="/notice/sell"
          onClick={close}
          className={pathname.includes('/notice') ? 'active' : 'inActive'}
        >
          Find pet
        </NavigLink>
      </NavListItem>
      <NavListItem>
        <NavigLink to="/friends" onClick={close}>
          Our friends
        </NavigLink>
      </NavListItem>
    </NavList>
  );
};

export default Navigation;

// import React, { useState } from 'react';
// import {
//   PrimaryNav,
//   SecondaryNav,
//   NavLink,
//   NavMenu,
//   Auth,
//   MobileContainer,
//   TabletContainer,
//   StyledBurger,
// } from './Navigation.styled';
// import AuthMenu from 'components/AuthMenu/AuthMenu';
// import { useAuth } from '../../redux/hooks';
// import { useMediaQuery } from 'react-responsive';
// import { Modal } from  '../ModalMenu/ModalMenu';
// import { UserMenu } from './../UserMenu/UserMenu';

// export const Navigation = () => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
//   const isDesktop = useMediaQuery({ minWidth: 1280 });


//   const { isLoggedIn } = useAuth();

//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       {isDesktop && (
//         <>
//           <PrimaryNav>
//             <NavMenu>
//               <NavLink to="/news">News</NavLink>
//               <NavLink to="/notices">Find pet</NavLink>
//               <NavLink to="/friends">Our friends</NavLink>
//             </NavMenu>
//           </PrimaryNav>
//           <SecondaryNav>
//             {isLoggedIn ? (
//               <UserMenu />
//             ) : (
//               <AuthMenu>
//                 <AuthMenu />
//               </AuthMenu>
//             )}
//           </SecondaryNav>
//         </>
//       )}

//       {isMobile && showModal && (
//         <Modal onClose={setShowModal}>
//           <MobileContainer>
//             <SecondaryNav>
//               {isLoggedIn ? (
//                 <UserMenu />
//               ) : (
//                 <AuthMenu>
//                   <AuthMenu />
//                 </AuthMenu>
//               )}
//             </SecondaryNav>
//             <PrimaryNav>
//               <NavMenu>
//                 <NavLink to="/news">News</NavLink>
//                 <NavLink to="/notices">Find pet</NavLink>
//                 <NavLink to="/friends">Our friends</NavLink>
//               </NavMenu>
//             </PrimaryNav>
//           </MobileContainer>
//         </Modal>
//       )}

//       {isTablet && !showModal && (
//         <SecondaryNav>
//           {isLoggedIn ? (
//             <UserMenu />
//           ) : (
//             <Auth>
//               <AuthMenu />
//             </Auth>
//           )}
//         </SecondaryNav>
//       )}
//       {isTablet && showModal && (
//         <Modal onClose={setShowModal}>
//           <TabletContainer>
//             <NavMenu>
//               <NavLink to="/news">News</NavLink>
//               <NavLink to="/notices">Find pet</NavLink>
//               <NavLink to="/friends">Our friends</NavLink>
//             </NavMenu>
//           </TabletContainer>
//         </Modal>
//       )}

//       <StyledBurger
//         aria-label="menu"
//         open={showModal}
//         onClick={() => {
//           setShowModal(current => !current);
//           setShowModal(!showModal);
//         }}
//       >
//         <div></div>
//         <div></div>
//         <div></div>
//       </StyledBurger>
//     </>
//   );
// };
