import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '707c1f9314db773250e6b474a61bb845',
  },
});

export const searchKeywords = async search => {
  const { data } = await instance.get('/search/keyword', {
    params: {
      query: search,
    },
  });
  return data;
};

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/week');
  return data;
};

export const getMovieDetails = async ({ id }) => {
  const { data } = await instance.get(`/movie/${id}`, {
    params: { language: 'en-US' },
  });
  return data;
};

export const getMovieCredits = async ({ id }) => {
  const { data } = await instance.get(`/movie/${id}/credits`, {
    params: { language: 'en-US' },
  });
  return data;
};

export const getMovieReviews = async ({ id }) => {
  const { data } = await instance.get(`/movie/${id}/reviews`, {
    params: { language: 'en-US' },
  });
  return data;
};

// get-movie-details
// get-movie-credits
// get-movie-reviews
