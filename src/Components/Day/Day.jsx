import { useState } from "react";

import PropTypes from "prop-types";

import Button from "../Button/Button";

import DayStyle from "./Day.module.css";
// names  import and ad for name className bla-bla.nameClasses from css
// pay attention on name file module.css

const Day = ({
  name = "Guest",
  numberUsThings = 0,
  isСompleted = "",
  moodGood = false,
  comment = "",
}) => {
  const [count = 0, setCount] = useState();
  // example const for use in  render dom nodes
  const goodMood = (
    <h1 className={DayStyle.Logined}>
     Мій настрій: <span className={DayStyle.spanMood}>Чудовий👍</span>{" "}
    </h1>
  );
  // example const for use in  render dom nodes
  const badMood = (<h1 className={DayStyle.Login}>
     Мій настрій: <span className={DayStyle.spanMood}> Так собі👎 </span></h1>);

  // handale for click as props for Button
  const handleClickStud = () => {
    // console.log(e.target, 666);
    setCount(count + 1);
  };

  // handale for click as props for Button
  const handleClickStudReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className={DayStyle.wrapStud}>
        <p className={DayStyle.name}>Цей день називається: <span className={DayStyle.spanDay}>{name}</span></p>
        <p className={DayStyle.age}>
         Моя кількість корисних справ на сьогодні: {numberUsThings}
        </p>
        <p className={DayStyle.age}>count: {count}</p>
        {/* conditional render */}
        {isСompleted === "yes" ? (
          <p className={DayStyle.isSucceeded}> I succeeded: {isСompleted}</p>
        ) : (
          <p className={DayStyle.isSucceededNo}> I succeeded: {isСompleted}</p>
        )}

        <p className={DayStyle.name}>
          {" "}
          I think I have some unfinished business because...{comment}
        </p>
        <Button
          nameBtn="number of outstanding cases"
          classNameProps={DayStyle.btnStud}
          clickProps={handleClickStud}
        />
        <Button
          nameBtn="all debts have been paid"
          classNameProps={DayStyle.btnStudRes}
          clickProps={handleClickStudReset}
        />
        {/* conditional render wsth const 
          For the truth, we accepted the expression in the form in !*!*!*!*  */}
        {moodGood ? goodMood : badMood}
      </div>
    </>
  );
};

Day.propTypes = {
  name: PropTypes.string,
  numberUsThings: PropTypes.number,
  isСompleted: PropTypes.string,
  moodGood: PropTypes.string,
  comment: PropTypes.string,
};

export default Day;
