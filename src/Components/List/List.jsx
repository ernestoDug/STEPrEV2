import PropTypes from "prop-types";
import MyBriksPicture from "../../assets/imgs/bricks.jpg";

const List = ({
  classNamePropsGames,
  classNamePropsIMGThumb,
  onClickProps,
  key,
  id,
  
}) => {
  console.log(id, "bur");
  return (
    <>
      <li className={classNamePropsGames} 
key = {key}
      onClick ={() => {onClickProps(id)}} 
     >
 
        <div className={classNamePropsIMGThumb}>
          <img src={MyBriksPicture} alt="briks wall" />
        </div>
        {id}
      </li>
     </>
  );
};

List.propTypes = {
  classNamePropsGames: PropTypes.string,
  classNamePropsIMGThumb: PropTypes.string,
  key: PropTypes.string,
  id: PropTypes.string,

  onClickProps: PropTypes.func,
};

export default List;
