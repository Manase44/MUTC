import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer-title">Murang'a university tech club</h2>
      <hr />
      <div className="footer-content">
        <div className="footer-club-subscription">
          <h4 className="footer-subtitle">subscribe</h4>
          <p className="subscribe-description">
            Enter your email address to recieve our weekly newsletters and stay
            up-to-date. We will not span your inbox.
          </p>
          <form action="#" className="footer-form">
            <input type="email" id="subscribeEmail" placeholder="Enter Email" />
            <input type="submit" value="subscribe" />
          </form>
        </div>
        <div>
          <h4 className="footer-subtitle">links</h4>
          <div className="footer-links-div">
            <Link to={"/"} className="footer-link-item">
              About us
            </Link>
            <Link to={"/events"} className="footer-link-item">
              our events
            </Link>
            <Link to={"/tracks"} className="footer-link-item">
              our tracks
            </Link>
            <Link to={"/leadership"} className="footer-link-item">
              view our leadership
            </Link>
          </div>
        </div>
        <div className="footer-club-social">
          <h4 className="footer-subtitle">social links</h4>
          <div className="footer-links-div">
            <a
              href="https://www.linkedin.com/in/manasegunga/"
              target="_blank"
              className="footer-link-item"
            >
              linkedin
            </a>
            <a
              href="https://www.instagram.com/fikopersempre/"
              target="_blank"
              className="footer-link-item"
            >
              instagram
            </a>
            <a
              href="https://web.facebook.com/?_rdc=1&_rdr"
              target="_blank"
              className="footer-link-item"
            >
              facebook
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              className="footer-link-item"
            >
              x
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          <strong>MUTC </strong>
          copyright &copy; {new Date().getFullYear()} -{" "}
          <a href="https://www.linkedin.com/in/manasegunga/" target="_blank">
            Manase Gunga
          </a>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
