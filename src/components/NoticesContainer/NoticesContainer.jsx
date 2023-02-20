import {
  NoticesCategoriesList,
  NoticeCategoryItem,
  NoticesCategoriesNav,
} from './NoticesContainer.styled';
import noPoster from 'noPoster.jpg';
import { NoticeCategoryItemTemplate } from 'components/NoticeCategoryItemTemplate/NoticeCategoryItemTemplate';
import { useEffect, useRef, useState } from 'react';
import { usePaginate } from '../../hooks/usePaginate';
import { useNotices } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../redux/notices/noticeSlice';
import { search } from '../../redux/notices/operations';
import { NothingFound } from '../../pages/NewsPage.styled';

const LIMIT = 20;

export const NoticesContainer = ({ type }) => {
  const dispatch = useDispatch();
  const { totalCount, items: itemsByType, update, page } = usePaginate(type);
  const { isLoading, query, searchNotices } = useNotices();
  const [next, setNext] = useState(true);
  const [lastElement, setLastElement] = useState(null);
  const TOTAL_PAGES = Math.ceil(totalCount / LIMIT);

  const items = searchNotices.length > 0 ? searchNotices : itemsByType;

  const observer = useRef(
    new IntersectionObserver(entries => {
      const first = entries[0];
      if (first.isIntersecting) {
        setNext(true);
      }
    })
  );

  useEffect(() => {
    dispatch(setQuery(''));
    setNext(true);
  }, [type]);

  useEffect(() => {
    if (page <= TOTAL_PAGES && !isLoading && next) {
      dispatch(update(page));
    }
    setNext(false);
  }, [next]);

  useEffect(() => {
    if (query) {
      const myType = type === 'lost-found' ? 'lost/found' : type;
      dispatch(search({ query, type: myType }));
    }
  }, [query]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  const nothingFound = query !== '' && searchNotices.length === 0 && !isLoading;

  return (
    <>
      <NoticesCategoriesNav>
        {nothingFound && (
          <NothingFound>Nothing found for this query</NothingFound>
        )}
        {!query && items.length === 0 && !isLoading && (
          <NothingFound>We have no notes for this category</NothingFound>
        )}
        {!nothingFound && items.length > 0 && (
          <NoticesCategoriesList>
            {items.map(
              (
                {
                  _id,
                  photoUrl = noPoster,
                  title,
                  type,
                  breed,
                  place,
                  dateOfBirth,
                  owner,
                  price,
                },
                idx
              ) =>
                idx === items.length - 1 && !isLoading ? (
                  <div ref={setLastElement} key={_id}>
                    <NoticeCategoryItem>
                      <NoticeCategoryItemTemplate
                        {...{
                          _id,
                          photoUrl,
                          title,
                          breed,
                          type,
                          place,
                          dateOfBirth,
                          owner,
                          price,
                        }}
                      />
                    </NoticeCategoryItem>
                  </div>
                ) : (
                  <NoticeCategoryItem key={_id}>
                    <NoticeCategoryItemTemplate
                      {...{
                        _id,
                        photoUrl,
                        title,
                        breed,
                        type,
                        place,
                        dateOfBirth,
                        owner,
                        price,
                      }}
                    />
                  </NoticeCategoryItem>
                )
            )}
          </NoticesCategoriesList>
        )}
      </NoticesCategoriesNav>
    </>
  );
};
export default NoticesContainer;
