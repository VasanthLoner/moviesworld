import "./footer.css";

function Footer() {
  return (
    <section className="bot">
      <div className="bot1">
        <span>Terms Of Use</span>
        <span>Privacy Policy</span>
        <span>FAQ</span>
        <span>Watch List</span>
      </div>
    </section>
import Facebook from "../../assets/images/facebook1.png"
import Twitter from "../../assets/images/twitter .png"
import Googleplus from "../../assets/images/googleplus 1.png"
import Github from "../../assets/images/github .png"
import Playstore from "../../assets/images/01.jpg"
import Applestore from "../../assets/images/01.jpg"

function Footer() {
  return (
    <div className="about">
        <div className="left">
            <ul>
                <li>Terms Of Use</li>
                <li className="privacy">Privacy-Policy</li>
                <li className="privacy"> FAQ</li>
                <li className="privacy"> Watch List</li>
            </ul>
            <p> <p>© 2021 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all <br /> related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly <br /> prohibited. All rights reserved.</p></p>
        </div>
        <div className="right">
          <h2>  Follow Us : </h2>
            <div className="divfacebook"> <img className="facebook" src={Facebook} alt="facebook" /></div>
            <div className="divfacebook"> <img className="twitter" src={Twitter} alt="facebook" /></div>
            <div className="divfacebook"> <img className="googleplus" src={Googleplus} alt="facebook" /></div>
            <div className="divfacebook"><img className="github" src={Github} alt="facebook" /></div>
        </div>
        <div className="cener"><h2>Streamit App</h2> 
        <div className="divfacebook1"> <img className="playstore" src={Playstore} alt="facebook" /></div>
            <div className="divfacebook1"><img className="applestore" src={Applestore} alt="facebook" /></div>
        </div>
    </div>
  );
}
export default Footer;
