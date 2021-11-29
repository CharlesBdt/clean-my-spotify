import moment from 'moment';

////
// USER SESSION
////

export const isTokenExpired = () => {
  // Check localStorage datetime
  // If 1 hour has passed => clear storage
  const date = moment();
  const tokenDate = localStorage.timestamp;

  if (date.subtract(1, 'hours').isAfter(tokenDate)) {
    window.localStorage.clear();
  }
};

export const setTokenToLocalStorage= (hash) => {
  // Spotify hash is composed of 3 key/value : access_token, token_type and expires_in
  // Store them in localStorage
  const stringAfterHash = hash.substring(1);
  const paramsInHash = stringAfterHash.split('&');

  paramsInHash.forEach((e) => {
    const [key, value] = e.split('=');
    localStorage.setItem(key, value);
  });

  // Add a timestamp to auto delete the token after an hour
  localStorage.setItem('timestamp', moment().format());
};

export const chunkArray = (inputArray, perChunk) => {
  let newArray = inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      // Start a new chunk
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return newArray;
};

////
// DATA MANIPULATION
////
export const getArtistsString = (artists) => {
  let artistsString = [];
  let artistsArray = artists ? artists : [];

  artistsArray.forEach(artist => {
    artistsString.push(artist.name);
  });

  return artistsString.join(', ');
};

export const getGenresString = (genres) => {
  let genresString = [];
  let genresArray = genres ? genres : [];

  genresArray.slice(0, 3).forEach(genre => {
    genresString.push(genre);
  });

  return genresString.join(', ');
};
