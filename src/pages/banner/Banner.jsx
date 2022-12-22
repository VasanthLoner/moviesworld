import "./banner.css";
import star from "../assets/icons/fullstar.png";
import stars from "../assets/icons/halfstar.png";
import domo from "../assets/images/bg1.jpg";
import inki from "../assets/images/parallax-logo.png";
import polygon from "../assets/icons/polygon.png";
function Banner() {
  return (
    <div>
      <div className="parallax">
        <div className="sto">
          <div className="sto1">
            {/* <h3 className="bailey">Bailey</h3> */}
            <img src={inki} alt="" className="" />
            <br />
            <img src={star} alt="star" className="zeus" />
            <img src={star} alt="star" className="zeus" />
            <img src={star} alt="star" className="zeus" />
            <img src={star} alt="star" className="zeus" />
            <img src={star} alt="star" className="zeus" />
            <span className="imdb">9.2(imdb)</span>
            <br />
            <span className="plus">13+</span>
            <span className="timing">2hr30mins</span>
            <h4 className="year">Movie of the year</h4>
            <p className="disc">
              Baileys Irish Cream is an Irish cream liqueur an alcoholic
              beverage flavoured with cream, cocoa, and Irish whiskey made by
              Diageo at Republic of Ireland and in Mallusk, Northern Ireland.
            </p>
            <button className="redplay">
              <img alt="poly" className="poly" src={polygon} />
              <span className="poly2">PLAY NOW</span>
            </button>
          </div>
          <div className="sto2">
            <img className="poco" alt="loco" src={domo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
