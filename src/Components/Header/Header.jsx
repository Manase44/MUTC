import "./Header.css";
import List from "./List";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="header-nav">
          <List className="upper-header-list" />
          <div className="header-logo">
            <Link to={"/"}>
              <img src="./favicon.png" alt="The MUTC logo" />
            </Link>
          </div>
          <a href="" className="header-register-button">
            register
          </a>
        </nav>
        <List className="bottom-header-list" />
      </header>
    </div>
  );
};

export default Header;
