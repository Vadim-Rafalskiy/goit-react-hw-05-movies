import { Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/HomePage/HomePage';
import Movies from '../Pages/Movies/Movies';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import MovieDetails from '../MovieDetails/MovieDetails';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default UserRoutes;
