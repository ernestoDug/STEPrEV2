// import { useState } from "react";

import PropTypes from "prop-types";

// import Button from "../Button/Button";

import DayStyle from "./Day.module.css";
// names  import and ad for name className bla-bla.nameClasses from css
// pay attention on name file module.css

const Day = ({
  date,
  name = "",
count = 0,
  isСompleted = "",
  moodGood = false,
  comment = "",
}) => {
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
  // const handleClickStudReset = () => {
  //   setCount(0);
  // };

  return (
    <>
      <div className={DayStyle.wrapStud}>
      <p className={DayStyle.name}>Сьогодні: <span className={DayStyle.spanDay}>{date}</span></p>

        <p className={DayStyle.name}>Цей день називається: <span className={DayStyle.spanDay}>{name}</span></p>
        <p className={DayStyle.name}>
        Заплановано стільки справ: {count}
        </p>
    
        {/* conditional render */}
        {isСompleted === "yes" ? (
          <p className={DayStyle.isSucceeded}> Посмішка до мене сьогодні{isСompleted}</p>
        ) : (
          <p className={DayStyle.isSucceededNo}> Посмішка до мене сьогодні  {isСompleted}</p>
        )}

        <p className={DayStyle.name}>
          {" "}
          Мій настрій сьогодні такий тому що...{comment}
        </p>
        
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
  count:PropTypes.number,
  comment: PropTypes.string,
  date: PropTypes.string,
};

export default Day;
