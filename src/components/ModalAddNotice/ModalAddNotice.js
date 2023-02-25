import React, { useState } from 'react';
import { AddNoticeStepOne } from './AddNoticeStepOne';
import { AddNoticeStepTwo } from './AddNoticeStepTwo';

export const ModalAddNotice = props => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    type: 'sell',
    title: '',
    name: '',
    dateOfBirth: '',
    breed: '',
    sex: '',
    photoUrl: '',
    place: '',
    price: '',
    comments: '',
    selectedDateInNumber: '',
  });

  let Child;
  if (page === 0) {
    Child = (
      <AddNoticeStepOne
        setData={setData}
        closeModal={props.onClose}
        setPage={setPage}
        data={data}
        title="First Page"
      />
    );
  } else {
    Child = (
      <AddNoticeStepTwo
        setData={setData}
        closeModal={props.onClose}
        setPage={setPage}
        data={data}
        title="Second Page"
      />
    );
  }

  return <>{Child}</>;
};
