import {
  PhotoPet,
  Title,
  PetSpanWrapper,
  PetSpan,
  PetDetails,
  PetDetailsButton,
  PetDetailsButtonText,
  PhotoPetWrapper,
  AddToFavImg,
  AddToFavBtn,
  AdvWrapper,
  AdvTitle,
  PetDeleteButton,
  PetDeleteButtonDiv,
  PetDeleteButtonImg,
  PetDeleteButtonText,
  AddPetToNotTextMob,
  AddPetToNotImgMob,
  AddPetToNotBtnMob,
} from './NoticeCategoryItemTemplate.styled';
import heart from 'utils/svg/heart.svg';
import strokeHeart from 'utils/svg/strokeHeart.svg';
import cross from 'utils/svg/cross.svg';
import recycleBin from 'utils/svg/recycleBin.svg';
import { useAuth, useNotices } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { deleteNotice, getNoticeById } from '../../redux/notices/operations';
import { useState, useEffect } from 'react';
import CardNewDate from '../../utils/CardNewDate/cardNewDate';
import { Modal } from '../Modal/Modal';
import { ListModalCardNotice } from '../ListModalCardNotice/ListModalCardNotice.jsx';

export const NoticeCategoryItemTemplate = ({
  _id,
  photoUrl,
  title,
  breed,
  type,
  place,
  dateOfBirth,
  owner,
}) => {
  // состояние модального окна
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const { currentNotice } = useNotices();

  const { user } = useAuth();

  const isFavorite = user.favorite.includes(_id);
  const isOwn = owner === user.id;

  const [fav, setFav] = useState(isFavorite);

  // открытие и закрытие модального окна =======
  const modalHandler = () => setModal(prevState => !prevState);
  useEffect(() => {
    if (!modal) {
      return;
    }
    dispatch(getNoticeById(_id));
  }, [modal]);
  // ===========================================

  return (
    <>
      {modal && currentNotice && (
        <Modal onClose={modalHandler}>
          <ListModalCardNotice date={currentNotice} />
        </Modal>
      )}
      <PhotoPetWrapper>
        <PhotoPet src={photoUrl} alt="Pet" />
        <AdvWrapper>
          <AdvTitle>{type}</AdvTitle>
        </AdvWrapper>
        <AddToFavBtn
          to=""
          onClick={() => {
            setFav(prevState => !prevState);
          }}
        >
          {fav ? (
            <AddToFavImg src={strokeHeart} alt="Remove from favorites" />
          ) : (
            <AddToFavImg src={heart} alt="Add to favorites" />
          )}
        </AddToFavBtn>
        <AddPetToNotBtnMob to="">
          <AddPetToNotImgMob src={cross} alt="Add pet to notices" />
          <AddPetToNotTextMob>Add pet</AddPetToNotTextMob>
        </AddPetToNotBtnMob>
      </PhotoPetWrapper>
      <PetDetails>
        <Title>{title}</Title>
        <PetSpanWrapper>
          <PetSpan>Breed:</PetSpan>
          <PetSpan>{breed}</PetSpan>
        </PetSpanWrapper>
        <PetSpanWrapper>
          <PetSpan>Place:</PetSpan>
          <PetSpan>{place}</PetSpan>
        </PetSpanWrapper>
        <PetSpanWrapper>
          <PetSpan>Age:</PetSpan>
          <PetSpan>
            <CardNewDate date={dateOfBirth} />
          </PetSpan>
        </PetSpanWrapper>
        <PetDetailsButton onClick={modalHandler}>
          <PetDetailsButtonText>Learn More</PetDetailsButtonText>
        </PetDetailsButton>
        {isOwn && (
          <PetDeleteButton
            onClick={() => {
              dispatch(deleteNotice({ id: _id, type }));
            }}
          >
            <PetDeleteButtonDiv>
              <PetDeleteButtonText>Delete</PetDeleteButtonText>
              <PetDeleteButtonImg
                src={recycleBin}
                alt="Recycle bin"
              ></PetDeleteButtonImg>
            </PetDeleteButtonDiv>
          </PetDeleteButton>
        )}
      </PetDetails>
    </>
  );
};
