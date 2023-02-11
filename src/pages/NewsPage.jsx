import { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment';
// =======
import SearchBar from '../utils/searchBar/searchBar';
import {
  Container,
  MainHeader,
  Ul,
  Li,
  Box,
  ColorBox,
  Header,
  Paragraph,
  Wraper,
  DateBox,
  BoxHref,
} from './NewsPage.styled';
// =======

// ================= запрос
export async function fetchSearchNews(query) {
  if (query === '') {
    query = 'dog';
  }
  const { data } = await axios.get(
    `http://localhost:3001/api/news?query=${query}`
  );
  return data;
}

// ================= логика
export default function NewsPage() {
  const [searchNews, setSearchNews] = useState([]);
  const [query, setQuery] = useState('dog');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  useEffect(() => {
    async function fetchNews(query) {
      try {
        setIsLoading(true);
        const response = await fetchSearchNews(query);
        const news = response.data.result.value;
        const total = response.data.result.totalCount;
        if (total === 0) {
          toast.error(
            'Sorry, there are no news matching your query. Please try again.'
          );
          return;
        }
        setSearchNews(news);
      } catch {
        setError('Can`t load news!');
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews(query);
  }, [query]);
  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);
  const handlerFormSubmit = values => {
    if (query !== values.query.trim()) {
      setSearchNews([]);
      setQuery(values.query.trim());
      setError(false);
      setIsLoading(false);
      setSearchParams({ query: values.query });
    }
  };
  return (
    <Container>
      <MainHeader>News</MainHeader>
      <SearchBar onSubmit={handlerFormSubmit} />
      {isLoading && <h2>... is loading</h2>}
      <ListNews news={searchNews} />
      <Toaster />
    </Container>
  );
}

// функция преобразования даты в правильный формат
function NewDate({ date }) {
  return moment(date).format('L');
}

// ================= функция разметки
function ListNews({ news }) {
  return (
    <Ul>
      {news.map(item => (
        <Li key={item.id}>
          <Box>
            <ColorBox></ColorBox>
            <Header>{item.title}</Header>
            <Paragraph>{item.body}</Paragraph>
            <Wraper>
              <DateBox>
                <NewDate date={item.datePublished} />
              </DateBox>
              <BoxHref
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </BoxHref>
            </Wraper>
          </Box>
        </Li>
      ))}
    </Ul>
  );
}
