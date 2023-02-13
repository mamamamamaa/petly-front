import {
  HomePageBg,
  HomePageTitle,
  HomePageWomanImg,
  HomePageWrapper,
} from './HomePage.styled';


const HomePage = () => {
  return (
    <>
      <HomePageTitle>Take good care of your small pets</HomePageTitle>
      <HomePageBg>
        <HomePageWomanImg  alt="Lady with pet" />
      </HomePageBg>
    </>
  );
};

export default HomePage;
