// import { useState } from 'react';
// import { AddNoticeStepOne } from './AddNoticeStepOne';
// import { AddNoticeStepTwo } from './AddNoticeStepTwo';
// import { useDispatch } from 'react-redux';
// import { addNotice } from 'redux/notices/operations';
// import {
//   ModalAddNoticeTitle,
//   ModalAddNoticeWrapper,
//   ModalAddNoticeText,
// } from './ModalAddNotice.styled';
// import moment from 'moment';

// export const ModalAddNotice = ({ onClose }) => {
//   const dispatch = useDispatch();
//   const [data, setData] = useState({
//     type: '',
//     title: '',
//     name: '',
//     dateOfBirth: '',
//     breed: '',
//     sex: '',
//     place: '',
//     price: '',
//     photoUrl: '',
//     comments: '',
//   });

//   const handleNextStep = (newData, final = false) => {
//     const normalizedDateOfBirth = moment(new Date(newData.dateOfBirth)).format(
//       'DD.MM.YYYY'
//     );
//     if (final) {
//       setData({
//         ...newData,
//         dateOfBirth: normalizedDateOfBirth,
//       });

//       const formData = new FormData();

//       formData.append(
//         'pictureURL',
//         newData.pictureURL,
//         newData.pictureURL.name
//       );
//       formData.append('comments', newData.comments);
//       formData.append('breed', newData.breed);
//       formData.append('dateOfBirth', newData.dateOfBirth);
//       formData.append('name', newData.name);
//       formData.append('type', newData.type);
//       formData.append('title', newData.title);
//       formData.append('sex', newData.sex);
//       formData.append('place', newData.place);
//       formData.append('price', newData.price);

//       dispatch(addNotice(newData));
//       return;
//     }
//     setData({
//       ...newData,
//       dateOfBirth: normalizedDateOfBirth,
//     });
//     setCurrentStep(prevStep => prevStep + 1);
//   };

//   const handlePrevStep = newData => {
//     setData(prevData => ({ ...prevData, ...newData }));
//     setCurrentStep(prevStep => prevStep - 1);
//   };

//   const cancelData = e => {
//     setData({
//       type: '',
//       title: '',
//       name: '',
//       dateOfBirth: '',
//       breed: '',
//       sex: '',
//       place: '',
//       price: '',
//       photoUrl: '',
//       comments: '',
//     });
//     setCurrentStep(0);
//   };
//   const [currentStep, setCurrentStep] = useState(0);
//   const steps = [
//     <AddNoticeStepOne next={handleNextStep} data={data} cancel={cancelData} />,
//     <AddNoticeStepTwo
//       next={handleNextStep}
//       data={data}
//       prev={handlePrevStep}
//       onClose={onClose}
//     />,
//   ];
//   return (
//     <ModalAddNoticeWrapper>
//       <ModalAddNoticeTitle>Add pet</ModalAddNoticeTitle>
//       {data.type === 'sell' && (
//         <ModalAddNoticeText>
//           Lets find a new home for you pet
//         </ModalAddNoticeText>
//       )}
//       {data.type === 'good-hands' && (
//         <ModalAddNoticeText>
//           You give your pet to a good people
//         </ModalAddNoticeText>
//       )}
//       {data.type === 'lost/found' && (
//         <ModalAddNoticeText>Your pet will find his home</ModalAddNoticeText>
//       )}
//       {steps[currentStep]}
//     </ModalAddNoticeWrapper>
//   );
// };
// =====================
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
        closeModal={props.onCloseModal}
        setPage={setPage}
        data={data}
        title="First Page"
      />
    );
  } else {
    Child = (
      <AddNoticeStepTwo
        setData={setData}
        closeModal={props.onCloseModal}
        setPage={setPage}
        data={data}
        title="Second Page"
      />
    );
  }

  return <>{Child}</>;
};
