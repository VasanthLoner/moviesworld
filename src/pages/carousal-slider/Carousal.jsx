import React from "react";
import star from "../assets/icons/fullstar.png";
import "../carousal-slider/carousal.css";
import play from "../assets/icons/play.png";
import play2 from "../assets/icons/play2.png";
import round from "../assets/icons/ellipse.png";
import polygon from "../assets/icons/polygon.png";

function Carousal() {
  return (
    <div>
      <Slide
        title="THE GREAT EMPEROR"
        rating="4(imdb)"
        description="  The most brutal emperor in the history of world.He was the founder
            of the most contiguous empire of the world i.e. the Mongol empire.He
            made an army by himself by uniting some nomadic tribes and trained
            them."
        image="https://templates.iqonic.design/streamit/frontend/html/images/movie-banner/02.jpg"
        guidance="G"
        duration="2h:42mins"
        releasedate="Nov.2017"
        star={[
          <img src={star} alt="star" className="star" />,
          <img src={star} alt="star" className="star" />,
          <img src={star} alt="star" className="star" />,
          <img src={star} alt="star" className="star" />,
        ]}
      />
      <Slide
        title="THE DINOSAUR"
        rating="3(imdb)"
        description=" Dinosaurs are a diverse group of reptiles of the clade Dinosauria.
      They first appeared during the Triassic period, between 243 and
      233.23 million years ago, although the exact origin and timing of
      the evolution of dinosaurs is the subject of active research."
        image="https://templates.iqonic.design/streamit/frontend/html/images/movie-banner/01.png"
        guidance="PG"
        duration="1hr:44mins"
        releasedate="Feb 2018"
        star={[
          <img src={star} alt="star" className="star" />,
          <img src={star} alt="star" className="star" />,
          <img src={star} alt="star" className="star" />,
        ]}
      />

      <Slide
        title="JUMBO QUEEN"
        rating="4.9(imdb)"
        description=" Jumbo also known as Jumbo the Elephant and Jumbo the Circus
         Elephant, was a 19th-century male African bush elephant born in
         Sudan. Jumbo was exported to Jardin des Plantes, a zoo in Paris, and
         then transferred in 1865 to London Zoo in England. Despite public
         protest, Jumbo was sold to P. T. Barnum, who took him to the United
         States for exhibition in March 1882."
        image="https://templates.iqonic.design/streamit/frontend/html/images/movie-banner/03.jpg"
        guidance="PG-13"
        duration="2hr:12mins"
        releasedate="Dec 2018"
        star={[
          <img src={star} alt="star" className="star" />,
          <img src={star} alt="star" className="star" />,
          <img src={star} alt="star" className="star" />,
          <img src={star} alt="star" className="star" />,
          <img src={star} alt="star" className="star" />,
        ]}
      />
    </div>
  );
}
function Slide(props) {
  return (
    <div className="sbody">
      <div className="carousal-holder">
        <div
          className="title"
          style={{
            background: `linear-gradient(
            rgba(27, 24, 24, 0.52),
            rgba(31, 27, 27, 0.455),
            rgba(20, 20, 20, 0.841),
            rgba(0, 0, 0, 0.782),
            rgba(0, 0, 0, 0.928)
          ),url(${props.image})`,
            margin: "0% 5% 0% 5%",
            padding: "2% 2% 2% 2%",
            backgroundSize: "cover",
          }}
        >
          <div>
            <h1 className="greatemperor">{props.title}</h1>
            <div className="stars">
              {props.star}
              <span className="imdb" style={{ color: "white" }}>
                {props.rating}
              </span>
            </div>
          </div>
          <div className="title2">
            <span className="kid1">{props.guidance}</span>
            <img className="round" src={round} alt="circle" />
            <span className="kid2">{props.duration}</span>
            <img className="round" src={round} alt="circle" />
            <span className="kid3">{props.releasedate}</span>
          </div>
          <span>
            <img src={play} alt="play" className="play" />
            <img src={play2} alt="play2" className="play2" />
            <p className="playside">Watch Trailer</p>
          </span>
          <p className="para">{props.description}</p>
          <button className="redplay">
            <img alt="poly" className="poly" src={polygon} />
            <span className="poly2">PLAY NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousal;
