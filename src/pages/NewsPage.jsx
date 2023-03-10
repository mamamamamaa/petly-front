import { useState, useEffect } from 'react';
// import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { BsChevronDoubleLeft } from 'react-icons/bs';
// =======
import { useNews } from '../redux/hooks';
import { getNews } from '../redux/news/operations';
import SearchBar from '../utils/searchBar/searchBar';
import ListNews from '../components/ListNews/ListNews';
import {
  Container,
  MainHeader,
  NothingFound,
  BoxPagination,
  ButtonArrow,
  Arrow,
  Plug,
  Text,
} from './NewsPage.styled';
import { FormattedMessage } from 'react-intl';
// =======

export default function NewsPage() {
  const [query, setQuery] = useState('pets');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [setSearchParams] = useSearchParams();
  const [pageNews, setPageNews] = useState(1);
  const [lastPageNews, setLastPageNews] = useState();

  const dispatch = useDispatch();
  const getDataNews = useNews();
  const currentNews = getDataNews.currentNews.articles;

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

  // ========= take VALUE =============
  const handlerFormSubmit = values => {
    if (values.query.trim() === '') {
      setQuery('pets');
      setError(false);
      setIsLoading(false);
      setSearchParams({ query: 'pets' });
    }
    if (query !== values.query.trim()) {
      setQuery(values.query.trim());
      setError(false);
      setIsLoading(false);
      setSearchParams({ query: values.query });
    }
  };

  // ========= PAGINATION =============
  const totalPage = getDataNews.currentNews.totalResults;

  useEffect(() => {
    if (currentNews) {
      const totalCountPage = Math.ceil(totalPage / currentNews.length);
      setLastPageNews(totalCountPage);
    }
  }, [currentNews, totalPage]);

  useEffect(() => {
    const newsData = { query, pageNews };
    dispatch(getNews(newsData));
  }, [dispatch, query, pageNews]);

  function onePege() {
    if (pageNews > 1) {
      setPageNews(1);
    }
  }
  function prevPage() {
    if (pageNews > 1) {
      const newPage = pageNews - 1;
      setPageNews(newPage);
    }
  }
  function nextPage() {
    const lastPage = totalPage + 1;
    if (pageNews < lastPage) {
      const newPage = pageNews + 1;
      setPageNews(newPage);
    }
  }

  return (
    <Container>
      <MainHeader><FormattedMessage id="news"/></MainHeader>
      <SearchBar onSubmit={handlerFormSubmit} />
      {isLoading && <h2>... is loading</h2>}
      {currentNews && currentNews.length > 0 && <ListNews news={currentNews} />}
      {(!currentNews || currentNews.length === 0) && (
        <NothingFound>Nothing found for this query</NothingFound>
      )}
      <BoxPagination>
        {pageNews === 1 && <Plug></Plug>}
        {pageNews !== 1 && (
          <>
            <ButtonArrow onClick={onePege}>
              <Arrow>
                <BsChevronDoubleLeft size="26px" />
              </Arrow>
            </ButtonArrow>

            <ButtonArrow onClick={prevPage}>
              <Arrow>
                <BsChevronLeft size="26px" />
              </Arrow>
            </ButtonArrow>
          </>
        )}
        <Text>{pageNews}</Text>
        {pageNews !== lastPageNews && (
          <ButtonArrow onClick={nextPage}>
            <Arrow>
              <BsChevronRight size="26px" />
            </Arrow>
          </ButtonArrow>
        )}
      </BoxPagination>
      <Toaster />
    </Container>
  );
}
