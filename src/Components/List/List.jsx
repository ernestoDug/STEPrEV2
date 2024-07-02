import PropTypes from "prop-types";

const List = ({ classNamePropsGames }) => {
  return (
    <>
      <ul>
        <li className={classNamePropsGames}>******</li>
      </ul>
    </>
  );
};

List.propTypes = {
  classNamePropsGames: PropTypes.string,
};


export default List;
