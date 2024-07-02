import Form from "../../Components/Form/Form";
import Deliter from "../../Components/Deliter/Deliter";
import { useState, useEffect } from "react";

import { getItems } from "../../utils/indexdb";

import Day from "../../Components/Day/Day";
import { nanoid } from "nanoid";

import ListDayStyle from "./Home.module.css";
// names  import and ad for name className bla-bla.nameClasses from css
// pay attention on name file module.css
const Home = () => {
  const [dayHistory, setDayHistory] = useState([{}]);

  // з бази
  useEffect(() => {
    getItems()
      .then((items) => {
        setDayHistory(items);
        console.log(items, "home");
      })
      .catch(() => {
        console.log(Error);
      });
  }, [setDayHistory]);

  return (
    <>
      {/* стрілка  */}
      <input
        className={ListDayStyle.open}
        id="top-box"
        type="checkbox"
        hidden
      />
      <label className={ListDayStyle.btn} htmlFor="top-box"></label>
      <div className={ListDayStyle.topPanel}>
        <Form />
      </div>
      <ul className={ListDayStyle.listDay}>
        {dayHistory.map(
          ({ nameMyDay, isСompleted, moodGood, comment, date, coutDb, id }) => (
            <li className={ListDayStyle.listDayItem} key={nanoid()}>
{nameMyDay?  ( <Deliter idPropsFromDbForDelite={id} />): null }
            

              <Day
                name={nameMyDay}
                isСompleted={isСompleted}
                moodGood={moodGood}
                comment={comment}
                date={date}
                // багатостраждальний пропс який вдалося передати
                // через дейта атрибут та витащити у форми
                count={+coutDb}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Home;
