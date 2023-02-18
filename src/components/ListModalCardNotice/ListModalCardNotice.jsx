import {
  Container,
  WraperMain,
  Img,
  AdvWrapper,
  AdvTitle,
  BoxSecond,
  Wraper,
  Title,
  BoxList,
  Ul,
  Li,
  TitleProperty,
  Text,
  Box,
  BoxButton,
  ButtonModal,
  AddToFavImg,
  CallModal,
} from './ListModalCardNotice.styled';
import NewsNewDate from '../../utils/NewsNewDate/NewsNewDate';
import noPoster from 'noPoster.jpg';
import strokeHeart from 'utils/svg/strokeHeart.svg';

export const ListModalCardNotice = ({ date }) => {
  const {
    photoUrl = noPoster,
    type = 'unknown',
    title,
    price,
    name = 'unknown',
    dateOfBirth = 'unknown',
    breed = 'unknown',
    place = 'unknown',
    sex = 'unknown',
    email = 'unknown',
    phone = 'unknown',
    comments = 'unknown',
  } = date;

  const call = phone => {
    const fullNumber = 'tel:' + phone;
    return fullNumber;
  };
  const getCall = call(phone);

  const changeTitle = type => {
    if (type === 'good-hands') {
      const newType = 'In good hands';
      return newType;
    } else {
      const newType = type;
      return newType;
    }
  };
  const getNewType = changeTitle(type);

  return (
    <Container>
      <WraperMain>
        <Wraper>
          <Img src={photoUrl} alt="Pet" />
          <AdvWrapper>
            <AdvTitle>{getNewType}</AdvTitle>
          </AdvWrapper>
          <BoxSecond>
            <Title>{title}</Title>
            <BoxList>
              <Ul>
                <Li>
                  <TitleProperty>Name:</TitleProperty>
                </Li>
                <Li>
                  <TitleProperty>Birthday:</TitleProperty>
                </Li>
                <Li>
                  <TitleProperty>Breed:</TitleProperty>
                </Li>
                <Li>
                  <TitleProperty>Place:</TitleProperty>
                </Li>
                <Li>
                  <TitleProperty>The sex:</TitleProperty>
                </Li>
                <Li>
                  <TitleProperty>Email:</TitleProperty>
                </Li>
                <Li>
                  <TitleProperty>Phone:</TitleProperty>
                </Li>
                {price !== undefined && type === 'sell' && (
                  <Li>
                    <TitleProperty>Price:</TitleProperty>
                  </Li>
                )}
              </Ul>
              <Ul>
                <Li>
                  <Text>{name}</Text>
                </Li>
                <Li>
                  <Text>
                    <NewsNewDate date={dateOfBirth} />
                  </Text>
                </Li>
                <Li>
                  <Text>{breed}</Text>
                </Li>
                <Li>
                  <Text>{place}</Text>
                </Li>
                <Li>
                  <Text>{sex}</Text>
                </Li>
                <Li>
                  <Text>{email}</Text>
                </Li>
                <Li>
                  <Text>{phone}</Text>
                </Li>
                {price !== undefined && type === 'sell' && (
                  <Li>
                    <Text>{price}$</Text>
                  </Li>
                )}
              </Ul>
            </BoxList>
          </BoxSecond>
        </Wraper>
        <Box>
          <Text>Comments: {comments}</Text>
        </Box>
      </WraperMain>

      <BoxButton>
        <ButtonModal>
          Add to <AddToFavImg src={strokeHeart} alt="Add to favorites" />
        </ButtonModal>
        <CallModal href={getCall}>Contact</CallModal>
      </BoxButton>
    </Container>
  );
};
