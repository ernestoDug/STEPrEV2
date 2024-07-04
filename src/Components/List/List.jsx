import PropTypes from "prop-types";
import MyBriksPicture from "../../assets/imgs/bricks.jpg";


const List = ({ classNamePropsGames, classNamePropsGamesIMGThumb }) => {
  return (
    <>
      <ul>
        <li className={classNamePropsGames}>
        <div className={classNamePropsGamesIMGThumb}>
        <img src={MyBriksPicture} alt="briks wall" />
        </div>
        </li>
      </ul>
    </>
  );
};

List.propTypes = {
  classNamePropsGames: PropTypes.string,
  classNamePropsGamesIMGThumb: PropTypes.string,
};


export default List;
