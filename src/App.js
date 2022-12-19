import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import TvShows from './pages/tv-shows/TvShows';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tv-shows' element={<TvShows />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
