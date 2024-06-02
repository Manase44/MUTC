import "./Events.css";
import schedule from "../../Data/schedule";
import { FcAlarmClock, FcCalendar } from "react-icons/fc";

const Events = () => {
  return (
    <section className="events-section" id="events">
      <h1 className="section-title">events schedule</h1>
      <p className="section-description">
        We have weekly events about the various tracks that we offer. Checkout
        the timetable.{" "}
      </p>
      <p className="section-description">
        <strong>Note: </strong> All sessions will take place in <em>Lab F04</em>
      </p>
      <div className="events-schedule-container">
        {schedule.map((currentSchedule) => {
          return (
            <div className="event-item">
              <div className="event-item-day">
                <div className="event-item-every">
                  <FcCalendar />
                  <em>every</em>
                </div>
                <span>{currentSchedule.day}</span>
              </div>
              <div className="event-item-content">
                <div className="event-item-name">
                  <p>{currentSchedule.title}</p>
                </div>
                <div className="event-item-location">
                  <FcAlarmClock />
                  <span>{currentSchedule.time}</span>
                </div>
                <p className="event-item-leader">By {currentSchedule.by}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Events;
