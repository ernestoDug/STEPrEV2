import PropTypes from "prop-types";


import DayStyle from "./Day.module.css";
// names  import and ad for name className bla-bla.nameClasses from css
// pay attention on name file module.css

const Day = ({
  date,
  name = "",
  // ось пропс куди запишемо каунтдБ дей рендерим на хомі
count = 0,
  isСompleted = "",
  moodGood = false,
  comment = "",
}) => {
  // example const for use in  render dom nodes
  const goodMood = (
    <p className={DayStyle.goodMoodCls}>
     Мій настрій: <span className={DayStyle.spanMood}>Чудовий👍</span>{" "}
    </p>
  );
  // example1  const for use in  render dom nodes conditional
  const badMood = (<p className={DayStyle.badMoodCls}>
     Мій настрій: <span className={DayStyle.spanMoodBad}> Так собі👎 </span></p>);

  // example 2 const for use in  render dom nodes on conditional
const contentInCarddDay = <div className={DayStyle.wrapStud}>
  
<p className={DayStyle.name}>Сьогодні: <span className={DayStyle.spanDay}>{date}</span></p>

  <p className={DayStyle.name}>Цей день називається: <span className={DayStyle.spanDay}>{name}</span></p>
  <p className={DayStyle.name}>
  Заплановано стільки справ: {count}
  </p>

  {/* conditional render */}
  {isСompleted === "завітала" ? (
    <p className={DayStyle.isSucceededYes}> Посмішка до мене сьогодні {isСompleted}</p>
  ) : (
    <p className={DayStyle.isSucceededNo}> Посмішка про мене сьогодні  {isСompleted}</p>
  )}

  <p className={DayStyle.name}>
    {" "}
    Мій настрій сьогодні такий тому що...{comment}
  </p>
  
         {/* conditional render wsth const 
    For the truth, we accepted the expression in the form in !*!*!*!*  */}
  {moodGood ? goodMood : badMood}


</div>
  

  return (
    <>
            {/* conditional render */}

    { name ? (contentInCarddDay): (null) }
      
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
