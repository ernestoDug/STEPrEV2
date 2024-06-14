import { useState } from "react";

import PropTypes from "prop-types";

import Button from "../Button/Button";

import counterStyle from "./Counter.module.css";

const Counter = ({ children }) => {
  const [count = 0, setCount] = useState();

  // handale for click as props for Button
  const handleClickCount = (e) => {
    // console.log(e.target, 666);
    e.preventDefault();
    setCount(count + 1);
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
    />
    {children}
  </>
);
}
Counter.propTypes = {
  children: PropTypes.node,
};

export default Counter;
