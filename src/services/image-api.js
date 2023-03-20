import axios from 'axios';

const API_KEY = '20761621-2a8f8271b820083cc742db217';
const BASE_URL = 'https://pixabay.com/api/';

export default function imageApi(searchQuery, searchPage) {
  return axios({
    url: BASE_URL,
    params: {
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: searchPage,
    },
  });
}
