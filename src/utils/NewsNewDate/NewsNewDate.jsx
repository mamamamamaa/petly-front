import moment from 'moment';

function NewsNewDate({ date }) {
  return moment(date).format('L');
}

export default NewsNewDate;
