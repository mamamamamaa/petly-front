import {
  NoticesSearch,
  SearchField,
  NoticesCategoriesList,
  NoticeCategoryItem,
  NoticesCategoriesNav,
  NoticesNavLink,
} from './NoticesContainer.styled';
import noPoster from 'noPoster.jpg';
// import { sell } from 'redux/notices/operations';
import { NoticeCategoryItemTemplate } from 'components/NoticeCategoryItemTemplate/NoticeCategoryItemTemplate';

export const NoticesContainer = ({ firstName, setFirstName, pets = [] }) => {
  return (
    <>
      <NoticesCategoriesNav>
        <NoticesSearch>
          <SearchField
            placeholder="Search"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </NoticesSearch>
        <NoticesNavLink />
        <NoticesNavLink />
        <NoticesNavLink />
        <NoticesNavLink />
        <NoticesNavLink />
        {pets.length > 0 ? (
          <NoticesCategoriesList>
            {pets.map(
              ({ _id, photoUrl = noPoster, title, breed, place, age }) => (
                <NoticeCategoryItem key={_id}>
                  <NoticeCategoryItemTemplate
                    {...{ _id, photoUrl, title, breed, place, age }}
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
