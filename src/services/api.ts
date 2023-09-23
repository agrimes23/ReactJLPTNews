import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getNews = async () => {
  const response = await api.get('/news');
  const news = response.data;
  return news;
};

export const search = async () => {
  const response = await api.get('/search');
  const results = response.data;
  return results;
};