import { Container } from 'utils';
import { HomePageTitle, HomepageSection } from './HomePage.styled';
import { FormattedMessage } from 'react-intl';

const HomePage = () => {
  return (
    <HomepageSection>
      <Container>
      <HomePageTitle>
        <FormattedMessage id="homePageMsg" values={{ break: <br /> }} />
      </HomePageTitle>
      {/* <HomePageBg> */}
        {/* <HomePageWomanWrapper>
          <HomePageWomanImg alt="Lady with pet" />
          <HomePageUnionHeartSvg alt="Rainbow heart"></HomePageUnionHeartSvg>
        </HomePageWomanWrapper> */}
      {/* </HomePageBg> */}
      </Container>
    </HomepageSection>
  );
};

export default HomePage;





// fallback kovalenkoandrii version
// import {
//   HomePageBg,
//   HomePageTitle,
//   HomePageWomanImg,
//   HomePageWomanWrapper,
//   HomePageUnionHeartSvg,
// } from './HomePage.styled';

// const HomePage = () => {
//   return (
//     <>
//       <HomePageTitle>
//         Take good care of your small pets
//       </HomePageTitle>
//       <HomePageBg>
//         <HomePageWomanWrapper>
//           <HomePageWomanImg alt="Lady with pet" />
//           <HomePageUnionHeartSvg alt="Rainbow heart"></HomePageUnionHeartSvg>
//         </HomePageWomanWrapper>
//       </HomePageBg>
//     </>
//   );
// };

// export default HomePage;
