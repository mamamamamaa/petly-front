import { Container } from 'utils';
import {
  HomePageBg,
  HomePageTitle,
  HomePageWomanImg,
  HomePageWomanWrapper,
  HomePageUnionHeartSvg,
  HomepageSection
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomepageSection>
      <Container>
      <HomePageTitle>
        Take good care of your small pets
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
