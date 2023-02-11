import {
  NoticesCategoriesList,
  NoticeCategoryItem,
  NoticesCategoriesNav,
} from './NoticesContainer.styled';
import noPoster from 'noPoster.jpg';
import { NoticeCategoryItemTemplate } from 'components/NoticeCategoryItemTemplate/NoticeCategoryItemTemplate';

export const NoticesContainer = (
  { pets = [] ,
  AddPetToNoticesBtn,
  AddPetToNoticesImg,
  AddPetToNoticesText
}) => {
  return (
    <>
      <NoticesCategoriesNav>
        {pets.length > 0 ? (
          <NoticesCategoriesList>
            {pets.map(
              ({ _id, photoUrl = noPoster, title, breed, place, age }) => (
                <NoticeCategoryItem key={_id}>
                  <NoticeCategoryItemTemplate
                    {...{
                      _id,
                      photoUrl,
                      title,
                      breed,
                      place,
                      age,
                      AddPetToNoticesBtn,
                      AddPetToNoticesImg,
                      AddPetToNoticesText,
                    }}
                  />
                </NoticeCategoryItem>
              )
            )}
          </NoticesCategoriesList>
        ) : null}
      </NoticesCategoriesNav>
    </>
  );
};
export default NoticesContainer;
