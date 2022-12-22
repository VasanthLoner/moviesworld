import './popularmovies.css'
import Movie1 from "../../assets/images/movie1.jpg"
import Movie2 from "../../assets/images/movie2.jpg"
import Movie3 from "../../assets/images/movie3.jpg"
import Movie4 from "../../assets/images/movie4.jpg"
// import Movie1 from "../../assets/images/movie1.jpg"
// import Movie1 from "../../assets/images/movie1.jpg"
// import Movie1 from "../../assets/images/movie1.jpg"
// import Movie1 from "../../assets/images/movie1.jpg"
// import Movie1 from "../../assets/images/movie1.jpg"
// import Movie1 from "../../assets/images/movie1.jpg"
import Smallcarousel from './Smallcarousel'
import Latest from './Latest'
const Popularmovies = () => {
    return(
        <>
      <div className='popularhead'>
        <div className='popularhead1'><h4>Popular Movies</h4></div>
        <div className='popularhead12'><a href=''><h6> View All</h6></a></div>
      </div>
<Smallcarousel name="Logan" duration="1h22mims" buttons="Play Now"  imgs="https://templates.iqonic.design/streamit/frontend/html/images/video/04.jpg"/>
<Smallcarousel name="Logan" duration="1h22mims" buttons="Play Now" img={Movie2} imgs="https://templates.iqonic.design/streamit/frontend/html/images/video/08.jpg"/>
<Smallcarousel name="Black Queen" duration="1h45mims" buttons="Play Now" img={Movie3} imgs="https://templates.iqonic.design/streamit/frontend/html/images/video/09.jpg"/>
<Smallcarousel name="Black Queen" duration="1h45mims" buttons="Play Now" img={Movie4}  imgs="https://templates.iqonic.design/streamit/frontend/html/images/video/05.jpg"/>
<div className='popularhead'>
        <div className='popularhead1'><h4>Specials & Latest Movies</h4></div>
        <div className='popularhead12'><a href=''><h6> View All</h6></a></div>
      </div>
<Smallcarousel name="Logan" duration="1h22mims" buttons="Play Now"  imgs="https://templates.iqonic.design/streamit/frontend/html/images/video/01.jpg"/>
<Smallcarousel name="Logan" duration="1h22mims" buttons="Play Now" img={Movie2} imgs="https://templates.iqonic.design/streamit/frontend/html/images/video/02.jpg"/>
<Smallcarousel name="Black Queen" duration="1h45mims" buttons="Play Now" img={Movie3} imgs="https://templates.iqonic.design/streamit/frontend/html/images/video/09.jpg"/>
<Smallcarousel name="Black Queen" duration="1h45mims" buttons="Play Now" img={Movie4}  imgs="https://templates.iqonic.design/streamit/frontend/html/images/video/04.jpg"/>
<div className='popularhead'>
        <div className='popularhead1'><h4>Movies Recommended For You</h4></div>
        <div className='popularhead12'><a href=''><h6> View All</h6></a></div>
      </div>
<Smallcarousel name="Logan" duration="1h22mims" buttons="Play Now"  imgs="https://templates.iqonic.design/streamit/frontend/html/images/video/06.jpg"/>
<Smallcarousel name="Logan" duration="1h22mims" buttons="Play Now" img={Movie2} imgs="https://templates.iqonic.design/streamit/frontend/html/images/video/10.jpg"/>
<Smallcarousel name="Black Queen" duration="1h45mims" buttons="Play Now" img={Movie3} imgs="https://templates.iqonic.design/streamit/frontend/html/images/video/03.jpg"/>
<Smallcarousel name="Black Queen" duration="1h45mims" buttons="Play Now" img={Movie4}  imgs="https://templates.iqonic.design/streamit/frontend/html/images/video/05.jpg"/>    
</>
    )
}
export default Popularmovies;