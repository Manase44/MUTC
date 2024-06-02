import "./Tracks.css";
import uiuxImage from "../../assets/Images/ux-ui.jpeg";
import tracks from "../../Data/tracks";
import RegisterTrack from "./RegisterTrack";

const Tracks = () => {
  return (
    <div className="tracks">
      <h1 className="section-title">our tracks</h1>
      <p className="section-description">
        MUTC has a diverse focus on technologies. Have a look at the tracks we
        offer:
      </p>
      <div className="track-section">
        {tracks.map((currentTrack) => {
          return (
            <div key={currentTrack.id} className="track-item">
            <div className="track-item-image">
              <img src={uiuxImage} alt="A picture resembling the track" />
            </div>
            <p className="track-item-name">{currentTrack.name}</p>
            <p className="track-item-descripption">
              {currentTrack.description}
            </p>
          </div>
          )
        })}
      </div>
      <RegisterTrack />
    </div>
  );
};

export default Tracks;
