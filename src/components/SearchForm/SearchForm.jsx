import { SearchTitle, SearchField } from './SearchForm.styled';
import axios from 'axios';

const SearchForm = ({ children }) => {
  const instance = axios.create({
    baseURL: 'http://localhost:3001',
  });
  const getAll = async () => {
    const { data } = await instance.get(
      '/api/notices/searchManyTitles?title=kitt'
    );
    console.log(data);
      return data;
  };
getAll();
  return (
    <SearchTitle>
      {children}
      <SearchField placeholder="Search" />
    </SearchTitle>
  );
};
export default SearchForm;
