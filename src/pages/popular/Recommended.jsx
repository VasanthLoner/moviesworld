import Playnow from "../../assets/images/playnow.png"
import './popularmovies.css'

function Smallcarousel(props){
    return(
        <>
      <div id="movieoverall" className='movielist'>
        <div id="imghover" className='movielist1'>
        <div  style={{background:`url(${props.imgs})`,backgroundSize:"cover" , height:"100%" , width:"100%" ,  backgroundRepeat: "no-repeat"}}  className='displayname'>
        <h4 className='moviename'>{props.name}</h4>
         <h6 className='duration'>{props.duration}</h6>
        <button className='btnplay'>
            <img className="playnow" src={Playnow} alt="" />
            {props.buttons}</button>
            </div >
        </div>
     </div>
          </>
    )
//     <div class="container">
//   <img src={Movie1} alt="Avatar" class="image"/>
//   <div class="overlay">
//     <div class="text">Hello World</div>
//   </div>
//  </div>
}
export default Smallcarousel;