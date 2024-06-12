import Form from "../../Components/Form/Form";
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
        console.log(items, 555);
      })
      .catch(() => {
        console.log(Error);
      });
  }, [setDayHistory]);

  return (
    <>
      <Form />

      <ul className={ListDayStyle.listDay}>
        {dayHistory.map(
          ({ nameMyDay, ageMy, isСompleted, isLoginMy, comment }) => (
            <li  className={ListDayStyle.listDayItem} key={nanoid()}>
              <Day
                name={nameMyDay}
                age={+ageMy}
                isСompleted={isСompleted}
                isLogin={isLoginMy}
                comment={comment}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Home;