import { useDispatch } from 'react-redux';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../../redux/hooks';
import { addFav, delFav } from '../../redux/auth/authSlice';
import {
  addNoticeToFav,
  deleteNoticeFromFav,
} from '../../redux/notices/operations';
// ===================
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
  ContactLink,
} from './ListModalCardNotice.styled';
import ModalNewDate from '../../utils/ModalNewDate/ModalNewDate';
import noPoster from 'noPoster.jpg';
import strokeHeart from 'utils/svg/strokeHeart.svg';
// ===================

export const ListModalCardNotice = ({ date, setFav, fav, isFavorite }) => {
  const {
    _id,
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

  // добавить в избранное помошники
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  // добавить в избранное логика
  const favoriteHandler = () => {
    if (!isLoggedIn) {
      return toast.error('You should login/sign up your account!');
    }

    if (fav) {
      dispatch(deleteNoticeFromFav(_id));
      dispatch(delFav(_id));
      toast.success('Removed from favorite!')
    } else {
      dispatch(addNoticeToFav({ id: _id, type }));
      dispatch(addFav(_id));
      toast.success('Successfully added to favorite!')
    }
    setFav(prevState => !prevState);
  };

  // сделать звонок
  const call = phone => {
    const fullNumber = 'tel:' + phone;
    return fullNumber;
  };
  const getCall = call(phone);

  // send email

  const mail = email => {
    const mailTo = 'mailto:' + email;
    return mailTo;
  };
  const sendMail = mail(email);

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
                    <ModalNewDate date={dateOfBirth} />
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
                  <Text>
                    <ContactLink 
                      href={sendMail}
                      className={email === 'unknown' ? 'noHover' : 'hover'}>
                      {email}
                    </ContactLink>
                  </Text>
                </Li>
                <Li>
                  <Text>
                    <ContactLink 
                      href={getCall}
                      className={phone === 'unknown' ? 'noHover' : 'hover'}>
                      {phone}
                    </ContactLink>
                  </Text>
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
        <ButtonModal onClick={favoriteHandler}>
          {!fav ? 'Add to' : 'Remove'}
          <AddToFavImg src={strokeHeart} alt="Add to favorites" />
        </ButtonModal>
        <CallModal href={getCall}>Contact</CallModal>
      </BoxButton>
    </Container>
  );
};
