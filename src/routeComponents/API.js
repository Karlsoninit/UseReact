/*eslint-disable */
import axios from 'axios';

export const FetchAPI = name =>
  axios
    .get(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(data => data.data);
