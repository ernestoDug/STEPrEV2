import PropTypes from "prop-types";

const Button = ({ nameBtn, clickProps, classNameProps, dbPropsFromCount }) => {


  console.log(dbPropsFromCount, 789);

  return (
    <>
      <button
      // зробив щоб айдишка так клас спіпадали щоб був унікальний айді кожної кнопки
      //  але зоб можна було достукатися до кнопкий каунтера якій передали в 
      //  дата атрбіут знаяення стану каунта щоб в базу закинути 
        id={classNameProps}
        data-dbpropsfromcountatr={dbPropsFromCount}
        onClick={clickProps}
        // onDoubleClick={doubleClickProps}
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
  // doubleClickProps: PropTypes.func,
  classNameProps: PropTypes.string,
  dbPropsFromCount: PropTypes.number,
};

export default Button;
