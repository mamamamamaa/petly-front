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
    const birthdayMessage = 'two years';
    return birthdayMessage;
  } else if (dataYear === '2020') {
    const birthdayMessage = 'three years';
    return birthdayMessage;
  } else if (dataYear === '2019') {
    const birthdayMessage = 'four years';
    return birthdayMessage;
  } else if (dataYear === '2018') {
    const birthdayMessage = 'five years';
    return birthdayMessage;
  } else if (dataYear === '2017') {
    const birthdayMessage = 'six years';
    return birthdayMessage;
  } else if (dataYear === '2016') {
    const birthdayMessage = 'seven years';
    return birthdayMessage;
  } else if (dataYear === '2015') {
    const birthdayMessage = 'eight years';
    return birthdayMessage;
  } else if (dataYear === '2014') {
    const birthdayMessage = 'nine years';
    return birthdayMessage;
  } else if (dataYear === '2013') {
    const birthdayMessage = 'ten years';
    return birthdayMessage;
  } else if (dataYear === '2012') {
    const birthdayMessage = 'eleven years';
    return birthdayMessage;
  } else if (dataYear === '2011') {
    const birthdayMessage = 'twelve years';
    return birthdayMessage;
  } else if (dataYear === '2010') {
    const birthdayMessage = 'thirteen years';
    return birthdayMessage;
  } else if (dataYear === '2009') {
    const birthdayMessage = 'fourteen years';
    return birthdayMessage;
  } else if (dataYear === '2008') {
    const birthdayMessage = 'fifteen years';
    return birthdayMessage;
  } else if (dataYear === '2007') {
    const birthdayMessage = 'sixteen years';
    return birthdayMessage;
  } else if (dataYear === '2006') {
    const birthdayMessage = 'seventeen years';
    return birthdayMessage;
  } else if (dataYear === '2005') {
    const birthdayMessage = 'eighteen years';
    return birthdayMessage;
  } else if (dataYear === '2004') {
    const birthdayMessage = 'nineteen years';
    return birthdayMessage;
  } else if (dataYear === '2004') {
    const birthdayMessage = 'twenty years';
    return birthdayMessage;
  } else {
    const birthdayMessage = 'over 20 y.o.';
    return birthdayMessage;
  }
}

export default CardNewDate;
