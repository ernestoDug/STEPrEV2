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
      .then((items ) => {
        setDayShedule(items);
  
        // console.log(items, 888888888);
      })
      .catch(() => {
        console.log(Error);
      });
  }, [setDayShedule]);

  return (
    <>
      <FormShedule 
      // for change border si input number 
      colorProps = {colorInput}
      />
      <label className={sheduleStyle.colorLabel} htmlFor="colorInput">Обери колір розкладу</label>
      <input
        className={sheduleStyle.colorInput}
        type="color"
        value={colorInput}
        onChange={changerColor}
      />
      {dayShedule ? (<List arrayProps={dayShedule} colorProps={colorInput}  />):null}
      
     
    </>
  );
};

export default Shedule;
