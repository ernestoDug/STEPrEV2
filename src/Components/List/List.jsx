import PropTypes from "prop-types";
import MyBriksPicture from "../../assets/imgs/bricks.jpg";



const List = ({ classNamePropsGames, classNamePropsGamesIMGThumb, onClickProps, key }) => {
  console.log(key, "bur")
  return (
    <>
      
        <li className={classNamePropsGames}
        onClick={onClickProps}
 key = {key}
        >
        <div className={classNamePropsGamesIMGThumb}>
        <img src={MyBriksPicture} alt="briks wall" />
        </div>
        </li>

    </>
  );
};

List.propTypes = {
  classNamePropsGames: PropTypes.string,
  classNamePropsGamesIMGThumb: PropTypes.string,
  key: PropTypes.string,
  onClickProps: PropTypes.func,
};


export default List;
