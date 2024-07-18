// import SelectStyles from "./Select.module.css";
import classNames from "classnames/bind";
import PropTypes from "prop-types";


// npm i classnames 
// A simple JavaScript utility for conditionally joining classNames together.


const Select = ({
  wraperClassProps,
  labelClassProps,
  labelTextProps,
  selectClassProps,
  nameSelectProps,
  optionClassProps,
  optionClassProps2,
  optionTextProps,
  valueSelectProps,
  valueOptio1Props,
  valueOptio2Props,
  valueOptio3Props,
  valueOptio4Props,
  valueOptio5Props,
  valueOptio6Props,
  valueOptio7Props,
  valueOptio8Props,
  valueOptio9Props,
  valueOptio10Props,
  valueOptio11Props,
  valueOptio12Props,
  valueOptio13Props,
  changerProps,
  idSelectProps,
}) => {
  return (
    <>
      <div className={wraperClassProps}>
        <label className={labelClassProps} htmlFor={idSelectProps}>
        {labelTextProps}
        </label>
        <select
          className={selectClassProps}
          onChange={changerProps}
          name={nameSelectProps}
          id={idSelectProps}
          value={valueSelectProps}
          
        >
          <option className={optionClassProps} value="">{optionTextProps}</option>
          <option className={classNames(optionClassProps, optionClassProps2)} value={valueOptio1Props}>
          {valueOptio1Props}
          </option>
          <option className={optionClassProps} value={valueOptio2Props}>
          {valueOptio2Props}
          </option>
          <option className={optionClassProps} value={valueOptio3Props}>
        {valueOptio3Props}
          </option>
          <option className={optionClassProps} value={valueOptio4Props}>
          {valueOptio4Props}
          </option>
          <option className={optionClassProps} value={valueOptio5Props}>
          {valueOptio5Props}
          </option>
          <option className={optionClassProps} value={valueOptio6Props}>
          {valueOptio6Props}
          </option>
          <option className={optionClassProps} value={valueOptio7Props}>
          {valueOptio7Props}
          </option>
          <option className={optionClassProps} value={valueOptio8Props}>
          {valueOptio8Props}
          </option>
          <option className={optionClassProps} value={valueOptio9Props}>
          {valueOptio9Props}
          </option>
          <option className={optionClassProps} value={valueOptio10Props}>
          {valueOptio10Props}
          </option>
          <option className={optionClassProps} value={valueOptio11Props}>
          {valueOptio11Props}
          </option>
          <option className={optionClassProps} value={valueOptio12Props}>
          {valueOptio12Props}
          </option>
          <option className={optionClassProps} value={valueOptio13Props}>
          {valueOptio13Props}
          </option>
        </select>
      </div>
    </>
  );
};

Select.propTypes = {
  wraperClassProps: PropTypes.string,
  labelClassProps: PropTypes.string,
  selectClassProps: PropTypes.string,
  optionClassProps: PropTypes.string,
  optionClassProps2:PropTypes.string,
  valueSelectProps: PropTypes.string,
  nameSelectProps: PropTypes.string,
  valueOptio1Props: PropTypes.string,
  valueOptio2Props: PropTypes.string,
  valueOptio3Props: PropTypes.string,
  valueOptio4Props: PropTypes.string,
  valueOptio5Props: PropTypes.string,
  valueOptio6Props: PropTypes.string,
  valueOptio7Props: PropTypes.string,
  valueOptio8Props: PropTypes.string,
  valueOptio9Props: PropTypes.string,
  valueOptio10Props: PropTypes.string,
  valueOptio11Props: PropTypes.string,
  valueOptio12Props: PropTypes.string,
  valueOptio13Props: PropTypes.string,
  changerProps: PropTypes.func,
  labelTextProps: PropTypes.string,
  optionTextProps: PropTypes.string,
  idSelectProps: PropTypes.string,
};

export default Select;
