import { useState } from "react";

import PropTypes from "prop-types";

import Button from "../Button/Button";

// import { addItem } from "../../utils/indexdb";
// import { nanoid } from "nanoid";

// import useDebounce from "../../utils/customHooks/useDebounse";

import counterStyle from "./Counter.module.css";

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

  return (
    <>
      <p className={counterStyle.count}>
        Сьогодні я планую стільки корисних справ: {count}
      </p>
      <Button
        nameBtn="Cправи на сьогодні"
        classNameProps={counterStyle.btn}
        clickProps={handleClickCount}
        // this props only get here and get in form from data-Atribute
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
