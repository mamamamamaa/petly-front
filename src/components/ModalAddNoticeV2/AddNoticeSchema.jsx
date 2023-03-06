import * as yup from 'yup';
export const AddNoticeStepOneSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, 'Title should be from 2 to 48 symbols')
    .max(48, 'Title should be from 2 to 48 symbols')
    .matches(
      /^[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/,
      'title should be from 2 to 48 symbols'
    )
    .required('The title is required'),
  name: yup.string().when('type', {
    is: val => val !== 'lostFound',
    then: yup
      .string()
      .min(2, 'Must be 2 or more letter')
      .max(16, 'Must be 16 or less letter')
      .trim()
      .required('The name is required'),
    otherwise: yup.string(),
  }),
  dateOfBirth: yup
    .date()
    .max(new Date(), `dateOfBirth field must be at earlier than ${new Date()}`),
  breed: yup.string().required('The breed is required'),
});
export const AddNoticeStepTwoSchema = yup.object().shape({
  gender: yup.string().oneOf(['male', 'female']).required('Gender is required'),
  location: yup
    .string()
    .min(4, 'Too Short!')
    .max(60, 'Too Long!')
    .required('Location is required'),
  photoUrl: yup
    .array()
    .nullable()
    .test(
      'max',
      'You can upload up to 5 files.',
      value => !value || value.filter(file => file !== null).length <= 5
    )
    .test(
      'fileFormat',
      'Image must be either a JPG, JPEG or PNG file.',
      value => {
        if (!value || value.length === 0) return true; // allow empty values
        return value.every(file => {
          if (!file) return true; // allow null values
          return ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type);
        });
      }
    )
    .test('fileSize', 'File size is too large', value => {
      if (!value || value.length === 0) return true; // allow empty values
      return value.every(file => {
        if (!file) return true; // allow null values
        return file.size <= 7 * 1024 * 1024; // 7MB
      });
    }),
  comments: yup
    .string()
    .min(8, 'Must be 8 or more letter')
    .max(120, 'Must be 120 or less letter')
    .trim()
    .required('The comments are required'),
});
