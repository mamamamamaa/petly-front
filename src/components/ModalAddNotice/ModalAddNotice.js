import React, { useState } from 'react';
import { AddNoticeStepOne } from './AddNoticeStepOne';
import { AddNoticeStepTwo } from './AddNoticeStepTwo';

export const ModalAddNotice = props => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    type: '',
    title: '',
    name: '',
    dateOfBirth: '',
    breed: '',
    sex: '',
    photoUrl: '',
    place: '',
    price: '',
    comments: '',
  });

  let Child = undefined;
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

  return (
    <>
      {/* <SubTitle>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </SubTitle>
      {data.type === 'sell' && (
        <SubTitle>Lets find a new home for you pet</SubTitle>
      )}
      {data.type === 'good-hands' && (
        <SubTitle>You give your pet to a good people</SubTitle>
      )}
      {data.type === 'lost/found' && (
        <SubTitle>Your pet will find his home</SubTitle>
      )} */}
      {Child}
    </>
  );
};
