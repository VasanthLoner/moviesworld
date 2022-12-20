import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
<<<<<<< HEAD
import Navbar from './components/navbar/Navbar';
=======
import TvShows from './pages/tv-shows/TvShows';

>>>>>>> fb74573265c49354744b6e27baf45c05b3899221
function App() {
  return (
    <>
    < Navbar />
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
