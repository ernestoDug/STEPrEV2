import PropTypes from "prop-types";

// names  import and ad for name className bla-bla.nameClasses from css +++++++1

// pay attention on name file module.css
// import ButtonCardStyle from "./Button.module.css";
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// this css we import in App  for props for name clasess
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++1

const Button = ({ nameBtn, clickProps, doubleClickProps, classNameProps }) => {
  return (
    <>
      <button
        onClick={clickProps}
        onDoubleClick={doubleClickProps}
        className={classNameProps}
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
  doubleClickProps: PropTypes.func,
  classNameProps:PropTypes.string,
  };

export default Button;
