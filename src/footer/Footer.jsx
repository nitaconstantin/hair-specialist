// import "../../src/responsive.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { RiLinkedinFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";

import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-row row">
          <div className="col-12 footer-column-wrapper">
            <div className="footer-column">
              <h2>Newsletter</h2>
              <div className="footer-column-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                ea unde porro voluptatum sapiente. Cumque quo nisi et nulla a?
              </div>
              <form className="footer-form">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your email"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-12 footer-column-wrapper">
            <div className="footer-column">
              <h2>Our Services</h2>
              <ul className="footer-list">
                <li className="footer-list-item">
                  <span className="footer-item-icon">
                    <MdKeyboardArrowRight />
                  </span>
                  <span className="footer-item-text">
                    <a href="#">Hair Cutting</a>
                  </span>
                </li>
                <li className="footer-list-item">
                  <span className="footer-item-icon">
                    <MdKeyboardArrowRight />
                  </span>
                  <span className="footer-item-text">
                    <a href="#">Hair Color</a>
                  </span>
                </li>
                <li className="footer-list-item">
                  <span className="footer-item-icon">
                    <MdKeyboardArrowRight />
                  </span>
                  <span className="footer-item-text">
                    <a href="#">Hair Treatment</a>
                  </span>
                </li>
                <li className="footer-list-item">
                  <span className="footer-item-icon">
                    <MdKeyboardArrowRight />
                  </span>
                  <span className="footer-item-text">
                    <a href="#">Hair Extension</a>
                  </span>
                </li>
                <li className="footer-list-item">
                  <span className="footer-item-icon">
                    <MdKeyboardArrowRight />
                  </span>
                  <span className="footer-item-text">
                    <a href="#">Head Wave</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 footer-column-wrapper">
            <div className="footer-column">
              <h2>Contact Me</h2>
              <ul className="footer-list">
                <li className="footer-list-item">A108 Adam Street</li>
                <li className="footer-list-item">New York, NY 535022</li>
                <li className="footer-list-item">United States</li>
                <li className="footer-list-item">+880123456789</li>
                <li className="footer-list-item">example@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-12 footer-column-wrapper">
            <div className="footer-column">
              <h2>About Hemsworth</h2>
              <div className="footer-column-desc">
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus.
              </div>
              <ul className="footer-list socials">
                <li className="footer-list-item">
                  <a href="#">
                    <IoLogoTwitter />
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#">
                    <CiInstagram />
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#">
                    <RiLinkedinFill />
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#">
                    <TiSocialFacebook />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; Copyright Chris H. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
