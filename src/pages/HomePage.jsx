import { HomePageBg, HomePageTitle, HomePageWomanImg } from './HomePage.styled';
import ladyWithPet1x from 'images/mobile/lady-with-pet-1x.png';
const HomePage = () => {
  return (
    <>
      <HomePageTitle>Take good care of your small pets</HomePageTitle>
      <HomePageBg>
        <HomePageWomanImg src={ladyWithPet1x} alt="Lady with pet" />
      </HomePageBg>
    </>
  );
};

export default HomePage;
