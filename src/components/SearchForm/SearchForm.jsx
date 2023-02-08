import { SearchTitle, SearchField } from './SearchForm.styled';
import axios from 'axios';
import { useState } from 'react';



const SearchForm = ({ children }) => {
   const [firstName, setFirstName] = useState('');
  const instance = axios.create({
    baseURL: 'http://localhost:3001',
  });
  const getAll = async () => {
    const { data } = await instance.get(
      `/api/notices/searchManyTitles?title=${firstName}`
    );
    console.log(data);
      return data;
  };
getAll();
  return (
    <SearchTitle>
      {children}
      <SearchField
        placeholder="Search"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
    </SearchTitle>
  );
};
export default SearchForm;
