export default {
  truncateText(string, size) {
    return string.length > size ? `${string.substring(0, size)} ...` : string;
  }
};
