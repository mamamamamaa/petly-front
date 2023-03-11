import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../redux/hooks';
import { addFav, delFav } from '../../redux/auth/authSlice';
import {
  addNoticeToFav,
  deleteNoticeFromFav,
} from '../../redux/notices/operations';
import {
  AddToFavImg,
  AdvTitle,
  AdvWrapper,
  Box,
  BoxButton,
  BoxList,
  BoxSecond,
  ButtonModal,
  CallModal,
  ContactLink,
  Container,
  Li,
  Text,
  Title,
  TitleProperty,
  Ul,
  Wraper,
  WraperMain,
} from './ListModalCardNotice.styled';
import ModalNewDate from '../../utils/ModalNewDate/ModalNewDate';
import strokeHeart from 'utils/svg/strokeHeart.svg';
import { ListModalCardNoticeDragDropContext } from './ListModalCardNoticeDragDropContext';
import { FormattedMessage } from 'react-intl';

export const ListModalCardNotice = ({ date, setFav, fav, isFavorite }) => {
  const {
    _id,
    photoUrl,
    type = 'unknown',
    title,
    price,
    name = 'unknown',
    dateOfBirth = 'unknown',
    breed = 'unknown',
    place = 'unknown',
    sex = 'unknown',
    email = 'unknown',
    mobilePhone = 'unknown',
    comments = 'unknown',
  } = date;

  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const favoriteHandler = () => {
    if (!isLoggedIn) {
      return toast.error('You should login/sign up your account!');
    }

    if (fav) {
      dispatch(deleteNoticeFromFav(_id));
      dispatch(delFav(_id));
      toast.success('Removed from favorite!');
    } else {
      dispatch(addNoticeToFav({ id: _id, type }));
      dispatch(addFav(_id));
      toast.success('Successfully added to favorite!');
    }
    setFav(prevState => !prevState);
  };

  const call = phone => 'tel:' + phone;
  const mail = email => 'mailto:' + email;
  const changeTitle = type => (type === 'good-hands' ? 'In good hands' : type);

  const sendMail = mail(email);
  const getCall = call(mobilePhone);

  const getNewType = changeTitle(type);

  return (
    <Container>
      <WraperMain>
        <Wraper>
          <ListModalCardNoticeDragDropContext {...{ photoUrl }} />
          <AdvWrapper>
            <AdvTitle>{getNewType}</AdvTitle>
          </AdvWrapper>
          <BoxSecond>
            <Title>{title}</Title>
            <BoxList>
              <Ul>
                <Li>
                  <TitleProperty><FormattedMessage id="namePet"/>:</TitleProperty>
                </Li>
                <Li>
                  <TitleProperty><FormattedMessage id="birthdayPet"/>:</TitleProperty>
                </Li>
                <Li>
                  <TitleProperty><FormattedMessage id="breed"/>:</TitleProperty>
                </Li>
                <Li>
                  <TitleProperty><FormattedMessage id="place"/>:</TitleProperty>
                </Li>
                <Li>
                  <TitleProperty><FormattedMessage id="sex"/>:</TitleProperty>
                </Li>
                <Li>
                  <TitleProperty><FormattedMessage id="email"/>:</TitleProperty>
                </Li>
                <Li>
                  <TitleProperty><FormattedMessage id="phone"/>:</TitleProperty>
                </Li>
                {price !== undefined && type === 'sell' && (
                  <Li>
                    <TitleProperty><FormattedMessage id="price"/>:</TitleProperty>
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
                      className={email === 'unknown' ? 'noHover' : 'hover'}
                    >
                      {email}
                    </ContactLink>
                  </Text>
                </Li>
                <Li>
                  <Text>
                    <ContactLink
                      href={getCall}
                      className={
                        mobilePhone === 'unknown' ? 'noHover' : 'hover'
                      }
                    >
                      {mobilePhone}
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
          <Text><FormattedMessage id="comment"/>: {comments}</Text>
        </Box>
      </WraperMain>

      <BoxButton>
        <ButtonModal onClick={favoriteHandler}>
          {!fav ? 'Add to' : 'Remove'}
          <AddToFavImg src={strokeHeart} alt="Add to favorites" />
        </ButtonModal>
        <CallModal href={getCall}><FormattedMessage id="contact"/></CallModal>
      </BoxButton>
    </Container>
  );
};
