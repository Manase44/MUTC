import "./Header.css";
import List from "./List";

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="header-nav">
        <List className="upper-header-list" />
          <div className="header-logo">
            <img src="./favicon.png" alt="The MUTC logo" />
          </div>
          <div className="header-register-button">
            <a href="" className="header-register-button-link">
              register
            </a>
          </div>
        </nav>
        <List className="bottom-header-list" />
      </header>
    </div>
  );
};

export default Header;
