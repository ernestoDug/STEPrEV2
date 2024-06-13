import { useState, useEffect } from "react";

import { getItems } from "../../utils/indexdb";
import List from "../../Components/List/List";

import FormShedule from "../../Components/FormShedule/FormShedule";

const Shedule = () => {
  const [dayShedule, setDayShedule] = useState([{}]);

  // з бази
  useEffect(() => {
    getItems()
      .then((items) => {
        setDayShedule(items);
        //   console.log(dayShedule, 55665);
        console.log(items, 888888888);
      })
      .catch(() => {
        console.log(Error);
      });
  }, [setDayShedule]);

  return (
    <>
      <FormShedule />
      <List arrayProps={dayShedule} />
    </>
  );
};

export default Shedule;
