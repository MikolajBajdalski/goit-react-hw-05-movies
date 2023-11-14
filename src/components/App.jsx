import React, { Suspense, lazy, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Header from './Header/Header';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

function App() {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavigation = link => {
    setActiveLink(link);
  };

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header activeLink={activeLink} />
        <Routes>
          <Route
            path="/"
            element={<Home onNavigate={() => handleNavigation('home')} />}
          />
          <Route
            path="/movies"
            element={<Movies onNavigate={() => handleNavigation('movies')} />}
          />
          <Route
            path="/movies/:id"
            element={
              <MovieDetails
                onNavigate={() => handleNavigation('movieDetails')}
              />
            }
          />
          <Route path="/cast" element={<Cast />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
