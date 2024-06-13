import { useState } from "react";
import { nanoid } from "nanoid/non-secure";

import { addItem } from "../../utils/indexdb";
import Button from "../Button/Button";

import formSheduleStyle from "./FormShedule.module.css";
// FOR STYLE BUTTON IN THIS FORM = AS IN FORM and one of the input
import formStyle from "../../Components/Form/Form.module.css";

const FormShedule = () => {
  const [lesson, setLesson] = useState("");
  const [numberLesson, setNumberLesson] = useState("");
  const [dateSh, setDateSh] = useState(new Date().toISOString().substring(0, 10));
    const [dayWeek, setDayWeek] = useState("");


  const submiterSheduleForm = (e) => {
    e.preventDefault();

    // this obj for db ++++++++++++++++++
    const dayShedule = {
      lesson,
      numberLesson: +numberLesson,
      // id використовується я ключ до бази глянь в утилсах индекс дб**
      id: nanoid(),
      dateSh,
      dayWeek,
      //++++++++++++++++++++++++++++
    };
    // до бази
    addItem(dayShedule);

    console.log(dayShedule, 666);
    // чистка 
    setLesson("");
    setNumberLesson("");
    setDayWeek('');
  };

  // universall handl input
  const changerFormShedule = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "lesson": {
        setLesson(value);
        break;
      }
      
      case "dayWeek": {
        setDayWeek(value);
        break;
      }

      case "date": {
        setDateSh(value);
        break;
      }

      case "numberLesson": {
        setNumberLesson(value);
        break;
      }

      default:
        return;
    }
  };
  // for randome bg ++++++++++++++++++++
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  // +++++++++++++++++++++++++++++++++++++++

  return (
    <>
      <form action="" onSubmit={submiterSheduleForm}>
        <input 
            className={formStyle.inputStyle}
                  type="date"
                  name="date"
                  placeholder="dd.мм.yy"
                  value={dateSh}
                  onChange={changerFormShedule}
                />

<input
          className={formSheduleStyle.inputSheduleDay}
          type="string"
          maxLength="13"
          name="dayWeek"
          placeholder="day of the week"
          value={dayWeek}
          onChange={changerFormShedule}
        />

        <input
          className={formSheduleStyle.inputShedule}
          type="number"
          maxLength="2"
          name="numberLesson"
          placeholder="№"
          value={numberLesson}
          onChange={changerFormShedule}
          style={{ backgroundColor: "RGB(" + r + "," + g + "," + b + ")" }}
        />


        <input
          className={formStyle.inputStyle}
          type="string"
          maxLength="25"
          name="lesson"
          placeholder="lesson title"
          value={lesson}
          onChange={changerFormShedule}
        />
        <Button nameBtn="Save" classNameProps={formStyle.buttonStyle} />
      </form>
    </>
  );
};

export default FormShedule;
