import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import Navbar from './components/navbar/Navbar';
import TvShows from './pages/tv-shows/TvShows';
import Carousal from './pages/carousal-slider/Carousal';
import Footer from './pages/Footer/Footer';
import Popularmovies from './pages/popular/Popularmovies';
function App() {
  return (
    <>
    < Navbar />
    <Carousal/> 
    <Popularmovies />
    <Footer />
   
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
