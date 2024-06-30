import { useState, useEffect } from "react";

import { getItems } from "../../utils/indexdb";
import List from "../../Components/List/List";

import FormShedule from "../../Components/FormShedule/FormShedule";
import sheduleStyle from "./Schedule.module.css";

const Shedule = () => {
  const [dayShedule, setDayShedule] = useState([{}]);
  // state for color from snpun for props fo List
  const [colorInput, setColotInput] = useState("#b5d56a");

  const changerColor = (e) => {
    setColotInput(e.target.value);
  };

  // з бази
  useEffect(() => {
    getItems()
      .then((items) => {
        setDayShedule(items);

        // console.log(items, 888888888);
      })
      .catch(() => {
        console.log(Error);
      });
  }, [setDayShedule]);

  return (
    <>
        {/* стрілка  */}
      <input
        className={sheduleStyle.open}
        id="top-box"
        type="checkbox"
        hidden
      />
      <label className={sheduleStyle.btn} htmlFor="top-box"></label>
      <div className={sheduleStyle.topPanel}>
     
          <FormShedule      colorProps={colorInput}>

     {/* as chliren  */}
                         <label className={sheduleStyle.colorLabel} htmlFor="colorInput">
            Пофарбуй день
          </label>
          <input
            className={sheduleStyle.colorInput}
            type="color"
            value={colorInput}
            onChange={changerColor}
          />
          </FormShedule>
 
      </div>

      {/* ------------------------- */}

      {dayShedule ? (
        <List arrayProps={dayShedule} 
        colorProps={colorInput} 
               
        />
      ) : null}
    </>
  );
};

export default Shedule;
