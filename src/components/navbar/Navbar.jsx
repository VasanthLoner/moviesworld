import "./navbar.css";
import Logo from "../../assets/images/logo.png";
import Search from "../../assets/images/search1.png";
import Bell from "../../assets/images/bell.png";
import User from "../../assets/images/user.jpg";
import Menu from "../../assets/images/menu1.png";
import Usericon from "../../assets/images/usericon 1.png";

const Navbar = () => {
  return (
    <>
      <div id="content" className="navbarlogo1">
        <div id="content1" className="menuimg">
          <img className="menuimg1" src={Menu} alt="" />
        </div>
        <div id="content1" className="logon">
          {" "}
          <img className="logon" src={Logo} alt="" />
        </div>
        <div id="content1">
          <ul className="list">
            <li>
              <a href="#"> HOME</a>
            </li>
            <li>
              <a href="">MOVIES</a>
            </li>
            <li>
              <a href="">TV SHOWS</a>
            </li>
            <li>
              <a href="">VIDEOS</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
            <li>
              <a href="">PAGES</a>
            </li>
          </ul>
        </div>
        <div id="content1" className="userid">
          <div>
            {" "}
            <a href="">
              <img className="search" src={Search} alt="" />
            </a>
          </div>
          <div>
            {" "}
            <a href="">
              <img className="bell" src={Bell} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img className="user" src={User} alt="" />
            </a>
          </div>
        </div>
        <div id="content1" className="usericon1">
          <a href="">
            <div className="usericon1">
              {" "}
              <img className="usericon" src={Usericon} alt="" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
export default Navbar;
