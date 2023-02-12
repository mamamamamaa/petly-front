import moment from 'moment';

function CardNewDate({ date }) {
  const dataYear = moment(date).format('YYYY');

  if (dataYear === '2023') {
    const birthdayMessage = 'newborn';
    return birthdayMessage;
  } else if (dataYear === '2022') {
    const birthdayMessage = 'one year';
    return birthdayMessage;
  } else if (dataYear === '2021') {
    const birthdayMessage = 'two year';
    return birthdayMessage;
  } else if (dataYear === '2020') {
    const birthdayMessage = 'three year';
    return birthdayMessage;
  } else if (dataYear === '2019') {
    const birthdayMessage = 'four year';
    return birthdayMessage;
  } else if (dataYear === '2018') {
    const birthdayMessage = 'five year';
    return birthdayMessage;
  } else if (dataYear === '2017') {
    const birthdayMessage = 'six year';
    return birthdayMessage;
  } else if (dataYear === '2016') {
    const birthdayMessage = 'seven year';
    return birthdayMessage;
  } else if (dataYear === '2015') {
    const birthdayMessage = 'eight year';
    return birthdayMessage;
  } else if (dataYear === '2014') {
    const birthdayMessage = 'nine year';
    return birthdayMessage;
  } else if (dataYear === '2013') {
    const birthdayMessage = 'ten year';
    return birthdayMessage;
  } else {
    const birthdayMessage = 'over 10 y.o.';
    return birthdayMessage;
  }
}

export default CardNewDate;
