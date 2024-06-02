import aboutImage from "../../assets/Images/aboutImage.webp";
import { AiOutlineAim } from "react-icons/ai";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { IoRocketSharp } from "react-icons/io5";
import { BsQuestionCircleFill } from "react-icons/bs";


const About = () => {
  return (
    <section id="about" className="about-section">
      <h1 className="section-title">about MUTC</h1>
      <div className="about-section-content">
        <div className="about-section-image">
          <img src={aboutImage} alt="MUTC teaching session ongoing" />
        </div>
        <div className="about-section-text">
          <div className="what-is-mutc">
            <h2 className="about-section-subtitle">
              <div className="about-section-subtitle-icons"> <BsQuestionCircleFill/></div> what is MUTC</h2>
            <p>
              Murang'a University Tech Club (MUTC) is a dynamic and innovative
              student organization dedicated to fostering excellence in
              engineering education and practice. Founded on the principles of
              collaboration, creativity, and community, our club provides a
              platform for students to explore their passion for engineering,
              develop practical skills, and contribute to meaningful projects
              that positively impact society.
            </p>
          </div>
          <div className="mission">
            <h2 className="about-section-subtitle">
              <div className="about-section-subtitle-icons"> <IoRocketSharp /></div>
               mission
            </h2>
            <p >To advance knowledge and technological transfer through teaching, training, learning, research, innovation, consultancy and community engagement for sustainable development.</p>
          </div>
          <div className="values">
            <h2 className="about-section-subtitle">
              <div className="about-section-subtitle-icons"><FaHandsHoldingCircle /></div>
               values
            </h2>
            <ul className="values-list">
              <li className="values-item">collaboration</li>
              <li className="values-item">creativity</li>
              <li className="values-item">innovation</li>
              <li className="values-item">integrity</li>
            </ul>
          </div>
          <div className="objectives">
            <h2 className="about-section-subtitle">
              <div className="about-section-subtitle-icons"> <AiOutlineAim /></div>
               objectives
            </h2>
            <p> 
              we aim to enhance our members' academic experiences, broaden their
              perspectives, and prepare them for successful careers in the field
              of engineering.
            </p>
            <p>
              promoting sustainable engineering solutions that address the
              challenges of today and tomorrow.
            </p>
            <p>
              inspire the next generation of engineers to think boldly, act
              responsibly, and make a difference in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
