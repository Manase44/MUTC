const List = (props) => {
  return (
    <ul className={`${props.className} header-list`}>
      <li className="header-list-item">
        <a href="">home</a>
      </li>
      <li className="header-list-item">
        <a href="">leadership</a>
      </li>
      <li className="header-list-item">
        <a href="">tracks</a>
      </li>
      <li className="header-list-item">
        <a href="">events</a>
      </li>
    </ul>
  );
};

export default List;
