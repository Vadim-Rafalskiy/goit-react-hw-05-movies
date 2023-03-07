import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './Pages/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import Movies from './Movies/Movies';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
