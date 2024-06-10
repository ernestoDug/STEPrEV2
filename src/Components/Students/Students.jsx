import { useState } from "react";

import PropTypes from "prop-types";

import Button from "../Button/Button";

import StudentsStyle from "./Students.module.css";
// names  import and ad for name className bla-bla.nameClasses from css
// pay attention on name file module.css

const Students = ({
  name = "Guest",
  age = 0,
  isStudent = "Not are student",
  isLogin = false,
}) => {
  // example const for use in  render dom nodes
  const logIned = <h1 className={StudentsStyle.Logined}>You Logined</h1>;
  // example const for use in  render dom nodes
  const logIn = <h1 className={StudentsStyle.Login}>Please Login</h1>;

  // handale for click as props for Button
  const handleClickStud = () => {
    // console.log(e.target, 666);
    setCount(count + 1);
  };

  // handale for click as props for Button
  const handleClickStudReset = () => {
    setCount(0);
  };

  const [count = 0, setCount] = useState();

  return (
    <>
      <div className={StudentsStyle.wrapStud}>
        <p className={StudentsStyle.name}>name: {name}</p>
        <p className={StudentsStyle.age}>age: {age}</p>
        <p className={StudentsStyle.age}>count: {count}</p>
        {/* conditional render */}
        {isStudent === "student" ? (
          <p className={StudentsStyle.isStudTrue}>{isStudent}</p>
        ) : (
          <p className={StudentsStyle.isStudFalse}>{isStudent}</p>
        )}
        <Button
          nameBtn="number of retakes"
          classNameProps={StudentsStyle.btnStud}
          clickProps={handleClickStud}
        />
        <Button
          nameBtn="resetreset debts"
          classNameProps={StudentsStyle.btnStud}
          clickProps={handleClickStudReset}
        />
        {/* conditional render wsth const 
          For the truth, we accepted the expression in the form in !*!*!*!*  */}
        {isLogin ? logIned : logIn}
      </div>
    </>
  );
};

Students.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.string,
  isLogin: PropTypes.string,
};

export default Students;
