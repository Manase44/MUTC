import "./Leadership.css";
import leadership from "../../Data/leadership";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

const Leardership = () => {
  return (
    <section className="leadership-section" id="leadership">
      <h1 className="section-title">leadership</h1>
      <div className="leadership-container">
        {leadership.map((currentleader) => {
          return (
            <div className="leader-card">
              <div className="leader-image">
                <img src={currentleader.image} alt="A leader " />
                <div className="socials">
                  <ul>
                    <li>
                      <a href={currentleader.facebook} target="-blank">
                        {currentleader.facebook && <FaFacebook />}
                      </a>
                    </li>
                    <li>
                      <a href={currentleader.twitter} target="-blank">
                        {currentleader.twitter && <AiFillTwitterCircle />}
                      </a>
                    </li>
                    <li>
                      <a href={currentleader.linkedIn} target="-blank">
                        {currentleader.linkedIn && <FaLinkedin />}
                      </a>
                    </li>
                    <li>
                      <a href={currentleader.instagram} target="-blank">
                        {currentleader.instagram && <RiInstagramFill />}
                      </a>
                    </li>
                  </ul>
                  <p className="follow-text">follow</p>
                  <div className="line"></div>
                </div>
              </div>
              <div className="leader-details">
                <p className="leader-name">{currentleader.name}</p>
                <p className="leader-position">{currentleader.position}</p>
                <p className="leader-bio">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  reiciendis eligendi saepe odio ea deleniti soluta qui
                  praesentium illo dolore.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Leardership;
