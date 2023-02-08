import { SearchTitle, SearchField } from './SearchForm.styled';
import axios from 'axios';
import { useState } from 'react';

const SearchForm = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [option, setOption] = useState('');
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
  const getStrict = async () => {
    const { data } = await instance.get(
      `/api/notices/searchOneTitle?title=${firstName}`
    );
    console.log(data);
    return data;
  };
  if (firstName !== '') {
    console.log(option);
    option ? getStrict() : getAll();
  }

  return (
    <SearchTitle>
      {children}
      <SearchField
        placeholder="Search"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      Radio buttons:
      <input
        type="radio"
        name="myRadio"
        value="option"
        onChange={e => {
          console.log(e.target.value);
          return setOption(e.target.value);
        }}
        defaultChecked={true}
      />
      Show all notices
      <input
        type="radio"
        name="myRadio"
        value="option"
        onChange={e => setOption(e.target.value)}
      />
      Use strict search:
    </SearchTitle>
  );
};
export default SearchForm;
