import moment from 'moment';

function NewsNewDate({ date }) {
  if (date === 'unknown') {
    const mixDate = 'unknown';
    return mixDate;
  }

  const dataYear = moment(date).format('YYYY');
  const dataMonth = moment(date).format('MM');
  const dataDay = moment(date).format('DD');

  const mixDate = dataDay + '/' + dataMonth + '/' + dataYear;

  return mixDate;
}

export default NewsNewDate;
