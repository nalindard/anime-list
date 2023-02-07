import axios from 'axios'
const baseUrl = import.meta.env.VITE_API_BASE_URL

// const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'X-RapidAPI-Key': baseUrl,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// };

// const obj = {rating: 'g'}

// axios.defaults.params['rating'] = 'g'

export const fetchFromAPI = async (url, params) => {
  const options = {
    params: params,
    headers: {},
  }

  try {
    const { data } = await axios.get(`${baseUrl}${url}`, options)
    return data
  } catch (error) {
    return 0
  }
}
