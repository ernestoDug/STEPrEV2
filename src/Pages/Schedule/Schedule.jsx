import { useState, useEffect } from "react";

import { getItems } from "../../utils/indexdb";
import List from "../../Components/List/List";

import FormShedule from "../../Components/FormShedule/FormShedule";
import sheduleStyle from "./Schedule.module.css";

const Shedule = () => {
  const [dayShedule, setDayShedule] = useState([{}]);
  // state for color from snpun for props fo List
  const [colorInput, setColotInput] = useState("blanchedalmond");

  const changerColor = (e) => {
    setColotInput(e.target.value);
  };

  // з бази
  useEffect(() => {
    getItems()
      .then((items) => {
        setDayShedule(items);
        //   console.log(dayShedule, 55665);
        // console.log(items, 888888888);
      })
      .catch(() => {
        console.log(Error);
      });
  }, [setDayShedule]);

  return (
    <>
      <FormShedule />
      <label className={sheduleStyle.colorLabel} htmlFor="colorInput">Select a color for day card</label>
      <input
        className={sheduleStyle.colorInput}
        type="color"
        value={colorInput}
        onChange={changerColor}
      />
      <List arrayProps={dayShedule} colorProps={colorInput} 
      />
    </>
  );
};

export default Shedule;
