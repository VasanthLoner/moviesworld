import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import Navbar from './components/navbar/Navbar';
import Popularmovies from './pages/popular/Popularmovies';
function App() {
  return (
    <>
    < Navbar />
    <Popularmovies />
      <BrowserRouter>
        <Routes>
      
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
