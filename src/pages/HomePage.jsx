import {
  HomePageBgMobileAndTablet,
  HomePageTitleMobileAndTablet,
  HomePageWomanImg,
  HomePageWomanWrapper,
  HomePageUnionHeartSvg,
  HomePageTitleDesktop,
  HomePageTitleDesktopWrapper,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <HomePageTitleMobileAndTablet>
        Take good care of your small pets
      </HomePageTitleMobileAndTablet>
      <HomePageBgMobileAndTablet>
        <HomePageTitleDesktopWrapper>
          <HomePageTitleDesktop>
            Take good care of your small pets
          </HomePageTitleDesktop>
        </HomePageTitleDesktopWrapper>
        <HomePageWomanWrapper>
          <HomePageWomanImg alt="Lady with pet" />
          <HomePageUnionHeartSvg alt="Rainbow heart"></HomePageUnionHeartSvg>
        </HomePageWomanWrapper>
      </HomePageBgMobileAndTablet>
    </>
  );
};

export default HomePage;
