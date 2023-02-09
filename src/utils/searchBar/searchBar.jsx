import React from 'react';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// ============= styled ===============
import { GoSearch } from 'react-icons/go';
import { Formik } from 'formik';
import {
  Search,
  FormEl,
  Input,
  SearchFormButton,
  InputBox,
} from './searchBar.styled';
// ====================================

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
                placeholder="Search"
              />
              <SearchFormButton type="submit" disabled={isSubmitting}>
                <GoSearch />
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
