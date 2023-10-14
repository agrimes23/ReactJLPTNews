import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api',
// });

const api = axios.create({
  baseURL: 'http://dontpushthistomain:5000/api',
});

export const getNews = async () => {
  const response = await api.get('/news');
  const news = response.data;
  return news;
};

export const search = async (level: any) => {
  const response = await api.get(`/search/${level}`);
  // const response = await api.get(`/search`);
  const results = response.data;
  return results;
};