import PropTypes from 'prop-types';
import { Suspense } from 'react';
import React from 'react';
import { Formik } from 'formik';
import {
  Search,
  FormEl,
  Input,
  SearchFormButton,
  InputBox,
} from './SearchBar.styled';
import { Outlet } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export default function SearchBar({ onSubmit }) {
  const [searchParams] = useSearchParams();

  const handleSubmit = async (values, actions) => {
    await onSubmit(values);

    actions.setSubmitting(false);
  };
  return (
    <Search as="main">
      <Formik
        initialValues={{ query: searchParams.get('query') || '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormEl>
            <InputBox>
              <Input
                name="query"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search news"
              />
              <SearchFormButton type="submit" disabled={isSubmitting}>
                Search
              </SearchFormButton>
            </InputBox>
          </FormEl>
        )}
      </Formik>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Search>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
