import { useState, useEffect, } from "react";

import PropTypes from "prop-types";

import Button from "../Button/Button";

import counterStyle from "./Counter.module.css";

// const for contexs********************************
// pay attention to how we name the variable blah blah Context
// *************************************

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleClickCount = (e) => {
    // console.log(e.target, 666);
    e.preventDefault();
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++
    // use a similar state update when you want to change many times
    // prevStatecount just for convenience, the name can be anything
     setCount((prevStatecount) => prevStatecount + 1);

    // ++++++++++++++++++++++++++++++++++++++ виходить такк  воно оновить стан одразу на 5
    // setCount((prevStatecount) => prevStatecount + 1);
    // setCount((prevStatecount) => prevStatecount + 4);
  };
  // для спостережнян роботи юс еф з не пустою залежністюю
useEffect(() => {document.title = `Count: ${count} `}, [count]);


  return (
    <>
      <p className={counterStyle.count}>
        Сьогодні я планую стільки корисних справ: {count}
      </p>
      <Button
        nameBtn="Cправи на сьогодні"
        classNameProps={counterStyle.btn}
        clickProps={handleClickCount}
        // this props only get here and get in шедуал from data-Atribute
        dbPropsFromCount={count}
        idProps="btnInCount"
      />
      {children}
    </>
  );
};


Counter.propTypes = {
  children: PropTypes.node,
};

export default Counter;
