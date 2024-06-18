import { useState } from "react";
import { nanoid } from "nanoid/non-secure";
import PropTypes from "prop-types";

import { addItem } from "../../utils/indexdb";
import Button from "../Button/Button";

import formSheduleStyle from "./FormShedule.module.css";
// FOR STYLE BUTTON IN THIS FORM = AS IN FORM and input style
import formStyle from "../../Components/Form/Form.module.css";

const FormShedule = ({ colorProps }) => {
  // lesson
  const [lesson1, setLesson1] = useState("");
  const [lesson2, setLesson2] = useState("");
  const [lesson3, setLesson3] = useState("");
  const [lesson4, setLesson4] = useState("");
  const [lesson5, setLesson5] = useState("");
  const [lesson6, setLesson6] = useState("");
  const [lesson7, setLesson7] = useState("");
// number lesson 
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

  // icons 
  const [animalIcon1, setAnimalIcon1]= useState('🦜');
  const [animalIcon2, setAnimalIcon2]= useState('🦩');
  const [animalIcon3, setAnimalIcon3]= useState('🦚');
  const [animalIcon4, setAnimalIcon4]= useState('🐦‍⬛');
  const [animalIcon5, setAnimalIcon5]= useState('🐧');
  const [animalIcon6, setAnimalIcon6]= useState('🐓');
  const [animalIcon7, setAnimalIcon7]= useState('🪿');

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
      animalIcon1,
      animalIcon2,
      animalIcon3,
      animalIcon4,
      animalIcon5,
      animalIcon6,
      animalIcon7,
      colorProps,
      // id використовується я ключ до бази глянь в утилсах индекс дб**
      id: nanoid(),
      dateSh,
      dayWeek,

      //++++++++++++++++++++++++++++
    };
    // до бази
    addItem(dayShedule);

    // console.log(dayShedule, 666);
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
    setAnimalIcon1('');
    setAnimalIcon2('');
    setAnimalIcon3('');
    setAnimalIcon4('');
    setAnimalIcon5('');
    setAnimalIcon6('');
    setAnimalIcon7('');
  }

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
        const animals = ["🦍", "🐕", "🐈", "🐅", "🐆", "🐎", "🦓", "🦬", "🐫" , "🦌", "🐀", "🦣", "🦆"];

        setAnimalIcon1(animals[Math.floor(Math.random() * animals.length + 1)]);
        break;
      }

      case "lesson2": {
        setLesson2(value);
        const animals = ["🦍", "🐕", "🐈", "🐅", "🐆", "🐎", "🦓", "🦬", "🐫" , "🦌", "🐀", "🦣", "🦆"];

        setAnimalIcon2(animals[Math.floor(Math.random() * animals.length + 1)]);
        break;
      }

      case "lesson3": {
        setLesson3(value);
        const animals = ["🦍", "🐕", "🐈", "🐅", "🐆", "🐎", "🦓", "🦬", "🐫" , "🦌", "🐀", "🦣", "🦆"];

        setAnimalIcon3(animals[Math.floor(Math.random() * animals.length + 1)]);
        break;
      }
      case "lesson4": {
        setLesson4(value);
        const animals = ["🦍", "🐕", "🐈", "🐅", "🐆", "🐎", "🦓", "🦬", "🐫" , "🦌", "🐀", "🦣", "🦆"];

        setAnimalIcon4(animals[Math.floor(Math.random() * animals.length + 1)]);
        break;
      }

      case "lesson5": {
        setLesson5(value);
        const animals = ["🦍", "🐕", "🐈", "🐅", "🐆", "🐎", "🦓", "🦬", "🐫" , "🦌", "🐀", "🦣", "🦆"];

        setAnimalIcon5(animals[Math.floor(Math.random() * animals.length + 1)]);
        break;
      }
      case "lesson6": {
        setLesson6(value);
        const animals = ["🦍", "🐕", "🐈", "🐅", "🐆", "🐎", "🦓", "🦬", "🐫" , "🦌", "🐀", "🦣", "🦆"];

        setAnimalIcon6(animals[Math.floor(Math.random() * animals.length + 1)]);
        break;
      }

      case "lesson7": {
        setLesson7(value);
        const animals = ["🦍", "🐕", "🐈", "🐅", "🐆", "🐎", "🦓", "🦬", "🐫" , "🦌", "🐀", "🦣", "🦆"];

        setAnimalIcon7(animals[Math.floor(Math.random() * animals.length + 1)]);
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
  // for randome color ++++++++++++++++++++
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  // +++++++++++++++++++++++++++++++++++++++

 
  return (
    <>
      <form action="" onSubmit={submiterSheduleForm}>
        <label className={formSheduleStyle.labelShedule} htmlFor="date">
          Сьогодні{" "}
        </label>
        <input
          className={formSheduleStyle.inputSheduleDay}
          type="date"
          name="date"
          placeholder="ДД.ММ.РР"
          value={dateSh}
          onChange={changerFormShedule}
        />

        <label className={formSheduleStyle.labelShedule} htmlFor="dayWeek">
          День тижня{" "}
        </label>

        <input
          className={formSheduleStyle.inputSheduleDay}
          type="string"
          maxLength="13"
          name="dayWeek"
          placeholder="  День тижня"
          value={dayWeek}
          onChange={changerFormShedule}
        />
{/* 1 */}
        <div className={formSheduleStyle.wrapShedule}>
          <input
            className={formSheduleStyle.inputShedule}
            type="number"
            maxLength="2"
            name="numberLesson1"
            placeholder="№"
            value={numberLesson1}
            onChange={changerFormShedule}
                style={{ color: colorProps }}
          />
          {!animalIcon1 ? (
            <p
              className={formSheduleStyle.iconAnimals}
              style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
            >
              🦕
            </p>
          ) : (
            <p
              className={formSheduleStyle.iconAnimals}
              style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
            >
              {animalIcon1}
            </p>
          )}

          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson1"
            placeholder="Назва предмету"
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
            style={{ color: colorProps }}          />
          {!animalIcon2 ? (
            <p
              className={formSheduleStyle.iconAnimals}
              style={{ color: colorProps }}            >
              🦕
            </p>
          ) : (
            <p
              className={formSheduleStyle.iconAnimals}
              style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
            >
              {animalIcon2}
            </p>
          )}
          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson2"
            placeholder="Назва предмету"
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
            style={{ color: colorProps }}          />
{!animalIcon3 ? (
            <p
              className={formSheduleStyle.iconAnimals}
              style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
            >
              🦕
            </p>
          ) : (
            <p
              className={formSheduleStyle.iconAnimals}
              style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
            >
              {animalIcon3}
            </p>
          )}
          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson3"
            placeholder="Назва предмету"
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
            style={{ color: colorProps }}          />
{!animalIcon4 ? (
            <p
              className={formSheduleStyle.iconAnimals}
              style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
            >
              🦕
            </p>
          ) : (
            <p
              className={formSheduleStyle.iconAnimals}
              style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
            >
              {animalIcon4}
            </p>
          )}
          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson4"
            placeholder="Назва предмету"
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
            style={{ color: colorProps }}          />
{!animalIcon5 ? (
            <p
              className={formSheduleStyle.iconAnimals}
              style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
            >
              🦕
            </p>
          ) : (
            <p
              className={formSheduleStyle.iconAnimals}
              style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
            >
              {animalIcon5}
            </p>
          )}
          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson5"
            placeholder="Назва предмету"
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
            style={{ color: colorProps }}          />
          {!animalIcon6 ? (
            <p
              className={formSheduleStyle.iconAnimals}
              style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
            >
              🦕
            </p>
          ) : (
            <p
              className={formSheduleStyle.iconAnimals}
              style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
            >
              {animalIcon6}
            </p>
          )}

          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson6"
            placeholder="Назва предмету"
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
            style={{ color: colorProps }}          />
{!animalIcon7 ? (
            <p
              className={formSheduleStyle.iconAnimals}
              style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
            >
              🦕
            </p>
          ) : (
            <p
              className={formSheduleStyle.iconAnimals}
              style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
            >
              {animalIcon7}
            </p>
          )}
          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson7"
            placeholder="Назва предмету"
            value={lesson7}
            onChange={changerFormShedule}
          />
        </div>

        <Button nameBtn="Зберегти"
         classNameProps={formStyle.buttonStyle} 
         />
      </form>
    </>
  );
};

FormShedule.propTypes = {
  colorProps: PropTypes.string,
};

export default FormShedule;
