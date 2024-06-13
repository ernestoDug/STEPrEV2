import { useState } from "react";
import { nanoid } from "nanoid/non-secure";

import { addItem } from "../../utils/indexdb";
import Button from "../Button/Button";

import formSheduleStyle from "./FormShedule.module.css";
// FOR STYLE BUTTON IN THIS FORM = AS IN FORM and input style
import formStyle from "../../Components/Form/Form.module.css";

const FormShedule = () => {
  const [lesson1, setLesson1] = useState("");
  const [lesson2, setLesson2] = useState("");
  const [lesson3, setLesson3] = useState("");
  const [lesson4, setLesson4] = useState("");
  const [lesson5, setLesson5] = useState("");
  const [lesson6, setLesson6] = useState("");
  const [lesson7, setLesson7] = useState("");
  const [lesson8, setLesson8] = useState("");


  const [numberLesson1, setNumberLesson1] = useState("");
  const [numberLesson2, setNumberLesson2] = useState("");
  const [numberLesson3, setNumberLesson3] = useState("");
  const [numberLesson4, setNumberLesson4] = useState("");
  const [numberLesson5, setNumberLesson5] = useState("");
  const [numberLesson6, setNumberLesson6] = useState("");
  const [numberLesson7, setNumberLesson7] = useState("");

  const [dateSh, setDateSh] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const [dayWeek, setDayWeek] = useState("");

  const submiterSheduleForm = (e) => {
    e.preventDefault();

    // this obj for db ++++++++++++++++++
    const dayShedule = {
      lesson1,
      lesson2,
      lesson3,
      lesson4,
      lesson5,
      lesson6,
      lesson7,
      numberLesson1: +numberLesson1,
      numberLesson2: +numberLesson2,
      numberLesson3: +numberLesson3,
      numberLesson4: +numberLesson4,
      numberLesson5: +numberLesson5,
      numberLesson6: +numberLesson6,
      numberLesson7: +numberLesson7,

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
    setLesson1("");
    setLesson2("");
    setLesson3("");
    setLesson4("");
    setLesson5("");
    setLesson6("");
    setLesson7("");
    setNumberLesson1("");
    setNumberLesson2("");
    setNumberLesson3("");
    setNumberLesson4("");
    setNumberLesson5("");
    setNumberLesson6("");
    setNumberLesson7("");
    setDayWeek("");
  };

  // universall handl input
  const changerFormShedule = (e) => {
    const { value, name } = e.target;

    switch (name) {

      case "numberLesson1": {
        setNumberLesson1(value);
        break;
      }

      case "numberLesson2": {
        setNumberLesson2(value);
        break;
      }

      case "numberLesson3": {
        setNumberLesson3(value);
        break;
      }

      case "numberLesson4": {
        setNumberLesson4(value);
        break;
      }

      case "numberLesson5": {
        setNumberLesson5(value);
        break;
      }

      case "numberLesson6": {
        setNumberLesson6(value);
        break;
      }
      case "numberLesson7": {
        setNumberLesson7(value);
        break;
      }

     


      case "lesson1": {
        setLesson1(value);
        break;
      }

      case "lesson2": {
        setLesson2(value);
        break;
      }

      case "lesson3": {
        setLesson3(value);
        break;
      }
      case "lesson4": {
        setLesson4(value);
        break;
      }

      case "lesson5": {
        setLesson5(value);
        break;
      }
      case "lesson6": {
        setLesson6(value);
        break;
      }

      case "lesson7": {
        setLesson7(value);
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

     

      default:
        return;
    }
  };
  // for randome border ++++++++++++++++++++
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  // +++++++++++++++++++++++++++++++++++++++

  return (
    <>
      <form action="" onSubmit={submiterSheduleForm}>
        <label className={formSheduleStyle.labelShedule} htmlFor="date">
          Today{" "}
        </label>
        <input
          className={formSheduleStyle.inputSheduleDay}
          type="date"
          name="date"
          placeholder="dd.мм.yy"
          value={dateSh}
          onChange={changerFormShedule}
        />

        <label className={formSheduleStyle.labelShedule} htmlFor="dayWeek">
          Day of the week{" "}
        </label>

        <input
          className={formSheduleStyle.inputSheduleDay}
          type="string"
          maxLength="13"
          name="dayWeek"
          placeholder="day of the week"
          value={dayWeek}
          onChange={changerFormShedule}
        />

        <div className={formSheduleStyle.wrapShedule}>
          <input
            className={formSheduleStyle.inputShedule}
            type="number"
            maxLength="2"
            name="numberLesson1"
            placeholder="№"
            value={numberLesson1}
            onChange={changerFormShedule}
            style={{ border: "RGB(" + r + "," + g + "," + b + ")3px solid" }}
          />

          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson1"
            placeholder="lesson title"
            value={lesson1}
            onChange={changerFormShedule}
          />
        </div>
        {/* 2 */}
        <div className={formSheduleStyle.wrapShedule}>
          <input
            className={formSheduleStyle.inputShedule}
            type="number"
            maxLength="2"
            name="numberLesson2"
            placeholder="№"
            value={numberLesson2}
            onChange={changerFormShedule}
            style={{ border: "RGB(" + r + "," + g + "," + b + ")3px solid" }}
          />
          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson2"
            placeholder="lesson title"
            value={lesson2}
            onChange={changerFormShedule}
          />
        </div>

        {/* 3 */}
        <div className={formSheduleStyle.wrapShedule}>
          <input
            className={formSheduleStyle.inputShedule}
            type="number"
            maxLength="2"
            name="numberLesson3"
            placeholder="№"
            value={numberLesson3}
            onChange={changerFormShedule}
            style={{ border: "RGB(" + r + "," + g + "," + b + ")3px solid" }}
          />

          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson3"
            placeholder="lesson title"
            value={lesson3}
            onChange={changerFormShedule}
          />
        </div>
        {/* 4 */}
        <div className={formSheduleStyle.wrapShedule}>
          <input
            className={formSheduleStyle.inputShedule}
            type="number"
            maxLength="2"
            name="numberLesson4"
            placeholder="№"
            value={numberLesson4}
            onChange={changerFormShedule}
            style={{ border: "RGB(" + r + "," + g + "," + b + ")3px solid" }}
          />

          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson4"
            placeholder="lesson title"
            value={lesson4}
            onChange={changerFormShedule}
          />
        </div>
        {/* 5 */}
        <div className={formSheduleStyle.wrapShedule}>
          <input
            className={formSheduleStyle.inputShedule}
            type="number"
            maxLength="2"
            name="numberLesson5"
            placeholder="№"
            value={numberLesson5}
            onChange={changerFormShedule}
            style={{ border: "RGB(" + r + "," + g + "," + b + ")3px solid" }}
          />

          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson5"
            placeholder="lesson title"
            value={lesson5}
            onChange={changerFormShedule}
          />
        </div>
        {/* 6 */}
        <div className={formSheduleStyle.wrapShedule}>
          <input
            className={formSheduleStyle.inputShedule}
            type="number"
            maxLength="2"
            name="numberLesson6"
            placeholder="№"
            value={numberLesson6}
            onChange={changerFormShedule}
            style={{ border: "RGB(" + r + "," + g + "," + b + ")3px solid" }}
          />

          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson6"
            placeholder="lesson title"
            value={lesson6}
            onChange={changerFormShedule}
          />
        </div>
        {/* 7 */}

        <div className={formSheduleStyle.wrapShedule}>
          <input
            className={formSheduleStyle.inputShedule}
            type="number"
            maxLength="2"
            name="numberLesson7"
            placeholder="№"
            value={numberLesson7}
            onChange={changerFormShedule}
            style={{ border: "RGB(" + r + "," + g + "," + b + ")3px solid" }}
          />

          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson7"
            placeholder="lesson title"
            value={lesson7}
            onChange={changerFormShedule}
          />
        </div>
       
        <Button nameBtn="Save" classNameProps={formStyle.buttonStyle} />
      </form>
    </>
  );
};

export default FormShedule;
