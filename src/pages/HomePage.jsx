import {
  HomePageBg,
  HomePageTitle,
  HomePageWomanImg,
  HomePageWrapper,
  HomePageUnionHeartSvg,
  HomePageTitleDesktop,
  HomePageTitleDesktopWrapper,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <HomePageTitle>Take good care of your small pets</HomePageTitle>
      <HomePageBg>
        <HomePageTitleDesktopWrapper>
          <HomePageTitleDesktop>
            Take good care of your small pets
          </HomePageTitleDesktop>
        </HomePageTitleDesktopWrapper>
        <HomePageWrapper>
          <HomePageWomanImg alt="Lady with pet" />
          <HomePageUnionHeartSvg alt="Rainbow heart"></HomePageUnionHeartSvg>
        </HomePageWrapper>
      </HomePageBg>
    </>
  );
};

export default HomePage;
