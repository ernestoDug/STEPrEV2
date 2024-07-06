import PropTypes from "prop-types";

const Button = ({
  nameBtn,
  clickProps,
  classNameProps,
  dbPropsFromCount,
  idProps,
}) => {
  // console.log(dbPropsFromCount, 789);

  return (
    <>
      <button
        
        data-dbpropsfromcountatr={dbPropsFromCount}
        onClick={clickProps}
        // onDoubleClick={doubleClickProps}
        className={classNameProps}
        id={idProps}
        // type="button"
      >
        {" "}
        {nameBtn}
      </button>
    </>
  );
};
Button.propTypes = {
  nameBtn: PropTypes.string,
  clickProps: PropTypes.func,
  // doubleClickProps: PropTypes.func,
  classNameProps: PropTypes.string,
  dbPropsFromCount: PropTypes.number,
  idProps: PropTypes.string,
};

export default Button;
