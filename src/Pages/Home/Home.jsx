import Form from "../../Components/Form/Form";
import { useState, useEffect } from "react";

import { getItems } from "../../utils/indexdb";

import Day from "../../Components/Day/Day";
import { nanoid } from "nanoid";
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

      <ol>
        {dayHistory.map(
          ({ nameMyDay, ageMy, isСompleted, isLoginMy, comment }) => (
            <li key={nanoid()}>
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
      </ol>
    </>
  );
};

export default Home;
