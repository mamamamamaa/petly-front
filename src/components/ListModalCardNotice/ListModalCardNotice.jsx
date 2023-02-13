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
} from './ListModalCardNotice.styled';
import NewsNewDate from '../../utils/NewsNewDate/NewsNewDate';

export const ListModalCardNotice = ({ date }) => {
  return (
    <Container>
      <WraperMain>
        <Wraper>
          <Img src={date.photoUrl} alt="Pet" />
          <AdvWrapper>
            <AdvTitle>{date.type}</AdvTitle>
          </AdvWrapper>
          <BoxSecond>
            <Title>{date.title}</Title>
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
                {date.price !== undefined && (
                  <Li>
                    <TitleProperty>Price:</TitleProperty>
                  </Li>
                )}
              </Ul>
              <Ul>
                <Li>
                  <Text>sweety {date.name}</Text>
                </Li>
                <Li>
                  <Text>
                    <NewsNewDate date={date.dateOfBirth} />
                  </Text>
                </Li>
                <Li>
                  <Text>{date.breed}</Text>
                </Li>
                <Li>
                  <Text>{date.place}</Text>
                </Li>
                <Li>
                  <Text>{date.sex}</Text>
                </Li>
                <Li>
                  <Text>{date.email}</Text>
                </Li>
                <Li>
                  <Text>{date.phone}</Text>
                </Li>
                {date.price !== undefined && (
                  <Li>
                    <Text>{date.price}$</Text>
                  </Li>
                )}
              </Ul>
            </BoxList>
          </BoxSecond>
        </Wraper>
        <Box>
          <Text>Comments: {date.comments}</Text>
        </Box>
      </WraperMain>

      <BoxButton>
        <ButtonModal>Add to</ButtonModal>
        <ButtonModal>Contact</ButtonModal>
      </BoxButton>
    </Container>
  );
};
