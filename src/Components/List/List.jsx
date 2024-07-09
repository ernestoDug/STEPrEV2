import PropTypes from "prop-types";
import listStyle from "./List.module.css"

const List = ({
  classNamePropsGames,
  classNamePropsIMGThumb,
  onClickProps,
  // key,
  id,
  imgProps, 
  imgProps2, 
  
}) => {
  // console.log(id, "bur");
  return (
    <>
      <li className={classNamePropsGames} 

      onClick ={() => {onClickProps(id)}} 
     >
 <div  className= {listStyle.superTh}> 
        <div className={classNamePropsIMGThumb}>
          <img src={imgProps} alt="briks wall" />
        </div>
        <div className={classNamePropsIMGThumb}>
          <img src={imgProps2} alt="windows" />
        </div>
        </div>
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
  imgProps: PropTypes.node,
  imgProps2: PropTypes.node,
};

export default List;
