import {
  HomePageBgMobileAndTablet,
  HomePageTitleMobileAndTablet,
  HomePageWomanImg,
  HomePageWomanWrapper,
  HomePageUnionHeartSvg,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <HomePageTitleMobileAndTablet>
        Take good care of your small pets
      </HomePageTitleMobileAndTablet>
      <HomePageBgMobileAndTablet>
        <HomePageWomanWrapper>
          <HomePageWomanImg alt="Lady with pet" />
          <HomePageUnionHeartSvg alt="Rainbow heart"></HomePageUnionHeartSvg>
        </HomePageWomanWrapper>
      </HomePageBgMobileAndTablet>
    </>
  );
};

export default HomePage;
