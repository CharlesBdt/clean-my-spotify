import moment from 'moment';

export default {
  truncateText(string, size) {
    return string.length > size ? `${string.substring(0, size)} ...` : string;
  },

  europeanDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }
};
