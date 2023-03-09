import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotFoundPage'));
const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
