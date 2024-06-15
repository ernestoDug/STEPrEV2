import { useState } from "react";

import PropTypes from "prop-types";

import Button from "../Button/Button";

// import { addItem } from "../../utils/indexdb";
// import { nanoid } from "nanoid";


import counterStyle from "./Counter.module.css";

const Counter = ({ children }) => {
  const [count = 0, setCount] = useState();

  // const coutDb = {count,     id: nanoid(),}

  // handale for click as props for Button
  const handleClickCount = (e) => {
    // console.log(e.target, 666);
    e.preventDefault();
    setCount(count + 1);
    // addItem(coutDb);
    // console.log(coutDb, 55555555);
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
