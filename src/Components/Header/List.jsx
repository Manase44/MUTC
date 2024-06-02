import { Link } from "react-router-dom";

const List = (props) => {
  return (
    <ul className={`${props.className} header-list`}>
      <li className="header-list-item">
        <Link to={"/"}>home</Link>
      </li>
      <li className="header-list-item">
        <Link to={"/leadership"}>leadership</Link>
      </li>
      <li className="header-list-item">
        <Link to={"/tracks"}>tracks</Link>
      </li>
      <li className="header-list-item">
        <Link to={"/events"}>events</Link>
      </li>
    </ul>
  );
};

export default List;
