import {
  HomePageBg,
  HomePageTitle,
  HomePageWomanImg,
  HomePageWrapper,
} from './HomePage.styled';


const HomePage = () => {
  return (
    <HomePageWrapper>
      <HomePageTitle>Take good care of your small pets</HomePageTitle>
      <HomePageBg>
        <HomePageWomanImg  alt="Lady with pet" />
      </HomePageBg>
    </HomePageWrapper>
  );
};

export default HomePage;
