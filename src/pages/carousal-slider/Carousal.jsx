import React from "react";
import star from "../assets/icons/fullstar.png";
import "../carousal-slider/carousal.css";
import play from "../assets/icons/play.png";
import play2 from "../assets/icons/play2.png";
import round from "../assets/icons/ellipse.png";
import polygon from "../assets/icons/polygon.png";

function Slide() {
  return (
    <>
      <div className="carousal-holder">
        <div className="title">
          <div>
            <h1 className="greatemperor">THE GREAT EMPEROR</h1>
            <div className="stars">
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <span className="imdb" style={{ color: "white" }}>
                4 (imdb)
              </span>
            </div>
          </div>
          <div className="title2">
            <span className="kid1">G</span>
            <img className="round" src={round} alt="circle" />
            <span className="kid2">2hr:42mins</span>
            <img className="round" src={round} alt="circle" />
            <span className="kid3">Nov.2017</span>
          </div>
          <span>
            <img src={play} alt="play" className="play" />
            <img src={play2} alt="play2" className="play2" />
            <p className="playside">Watch Trailer</p>
          </span>
          <p className="para">
            The most brutal emperor in the history of world.He was the founder
            of the most contiguous empire of the world i.e. the Mongol empire.He
            made an army by himself by uniting some nomadic tribes and trained
            them.
          </p>
          <button className="redplay">
            <img alt="poly" className="poly" src={polygon} />
            <span className="poly2">PLAY NOW</span>
          </button>
        </div>
      </div>
      {/* first carousal over */}
      <div className="carousal-holder">
        <div className="holder">
          <div>
            <h1 className="dinosaur">THE DINOSAUR</h1>
            <div className="stars">
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <span className="imdb" style={{ color: "white" }}>
                3 (imdb)
              </span>
            </div>
          </div>
          <div className="title2">
            <span className="kid1">PG</span>
            <img className="round" src={round} alt="circle" />
            <span className="kid2">1hr:44mins</span>
            <img className="round" src={round} alt="circle" />
            <span className="kid3">Feb 2018</span>
          </div>
          <span>
            <img src={play} alt="play" className="play" />
            <img src={play2} alt="play2" className="play2" />
            <p className="playside">Watch Trailer</p>
          </span>
          <p className="para">
            Dinosaurs are a diverse group of reptiles of the clade Dinosauria.
            They first appeared during the Triassic period, between 243 and
            233.23 million years ago, although the exact origin and timing of
            the evolution of dinosaurs is the subject of active research.
          </p>
          <button className="redplay">
            <img alt="poly" className="poly" src={polygon} />
            <span className="poly2">PLAY NOW</span>
          </button>
        </div>
      </div>

      {/*second carousal over */}
      <div className="carousal-holder">
        <div className="holder">
          <div>
            <h1 className="dinosaur">JUMBO QUEEN</h1>
            <div className="stars">
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <img src={star} alt="star" className="star" />
              <span className="imdb" style={{ color: "white" }}>
                4.9 (imdb)
              </span>
            </div>
          </div>
          <div className="title2">
            <span className="kid1">PG-13</span>
            <img className="round" src={round} alt="circle" />
            <span className="kid2">2hr:12mins</span>
            <img className="round" src={round} alt="circle" />
            <span className="kid3">Dec 2018</span>
          </div>
          <span>
            <img src={play} alt="play" className="play" />
            <img src={play2} alt="play2" className="play2" />
            <p className="playside">Watch Trailer</p>
          </span>
          <p className="para">
            Jumbo also known as Jumbo the Elephant and Jumbo the Circus
            Elephant, was a 19th-century male African bush elephant born in
            Sudan. Jumbo was exported to Jardin des Plantes, a zoo in Paris, and
            then transferred in 1865 to London Zoo in England. Despite public
            protest, Jumbo was sold to P. T. Barnum, who took him to the United
            States for exhibition in March 1882.
          </p>
          <button className="redplay">
            <img alt="poly" className="poly" src={polygon} />
            <span className="poly2">PLAY NOW</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default Slide;
