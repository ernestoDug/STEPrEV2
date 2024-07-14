import PropTypes from "prop-types";
import listStyle from "./List.module.css"

const List = ({
  classNamePropsGames,
  classNamePropsIMGThumb,
  onClickProps,
  id,
  imgProps, 
  imgProps2, 
  children,
  
}) => {
  // console.log(id, "bur");

  // const for render 
  const divWithImg =    <div className={classNamePropsIMGThumb}>
  <img src={imgProps} alt="windows" />
</div>

const divWithoutImg =    <div className={classNamePropsIMGThumb}>
</div>


const divWithImg2 =    <div className={classNamePropsIMGThumb}>
  <img src={imgProps2} alt="briks wall" />
</div>


  return (
    <>
      <li className={classNamePropsGames} 

      onClick ={() => {onClickProps(id)}} 
      id
     >
 <div  className= {listStyle.superTh}> 

  {imgProps ? (divWithImg): (divWithoutImg)}
       

          {imgProps2 ? (divWithImg2): (null)}
          </div>
          {children}
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
  children:  PropTypes.node,
};

export default List;
