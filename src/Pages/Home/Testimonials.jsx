import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import testimonies from "../../Data/testimonies";
import mattestantImage from "../../assets/Images/attestantImage.webp";
import wattstantImage from "../../assets/Images/wattestant.jpg";

const Testimonials = () => {
  return (
    <section id="testimnials" className="testimonials-section">
      <h1 className="section-title">testimonials</h1>

      <div className="testimonial-items">
        {testimonies.map((current) => {
          return (
            <div key={current.id} className="testimonial-item">
              <div className="testimony-header">
                <div className="attestant-image-div">
                  <img
                    src={
                      current.id == "tmny01" ? mattestantImage : wattstantImage
                    }
                    width={100}
                    alt="The attestant facial impression"
                  />
                </div>
                <div className="attestant-details">
                  <p className="attestant-name">{current.name}</p>
                  <p className="attestant-title">{current.title}</p>
                </div>
              </div>
              <p className="testimony-text">
                <RiDoubleQuotesL />
                {current.testimony}
                <RiDoubleQuotesR />
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
