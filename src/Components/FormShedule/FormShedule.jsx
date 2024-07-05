import { useState } from "react";
import { nanoid } from "nanoid/non-secure";
import PropTypes from "prop-types";

import Counter from "../Counter/Counter";
import { addItem } from "../../utils/indexdb";
import Button from "../Button/Button";
import Select from "../Select/Select";

import formSheduleStyle from "./FormShedule.module.css";
// FOR STYLE BUTTON IN THIS FORM = AS IN FORM and input style
import formStyle from "../../Components/Form/Form.module.css";

const FormShedule = ({ colorProps, children }) => {
  // obj for state
  const [lessons, setLessons] = useState({
    dateSh: new Date().toISOString().substring(0, 10),
    dayWeek: "",
    moodGood: "",
    comment: "",
    numberLesson1: "1",
    lesson1: "",
    animalIcon1: "🦕",
    numberLesson2: "2",
    animalIcon2: "🦕",
    lesson2: "",
    numberLesson3: "3",
    lesson3: "",
    animalIcon3: "🦕",
    numberLesson4: "4",
    lesson4: "",
    animalIcon4: "🦕",
    numberLesson5: "5",
    lesson5: "",
    animalIcon5: "🦕",
    numberLesson6: "6",
    lesson6: "",
    animalIcon6: "🦕",
    numberLesson7: "7",
    animalIcon7: "🦕",
    lesson7: "",
  });

  const submiterSheduleForm = (e) => {
    e.preventDefault();
     // отрима. елемент по аді
     let getElOnId = document.getElementById("btnInCount");

     // console.log(getElOnId.attributes["data-dbPropsFromCountAtr"].value, "po id dataAtr99");
 
     // id використовується я ключ до бази глянь в утилсах индекс дб**

    // this obj for db ++++++++++++++++++
    const dayShedule = {
      lesson1: lessons.lesson1,
      lesson2: lessons.lesson2,
      lesson3: lessons.lesson3,
      lesson4: lessons.lesson4,
      lesson5: lessons.lesson5,
      lesson6: lessons.lesson6,
      lesson7: lessons.lesson7,
      // number
      numberLesson1: +lessons.numberLesson1,
      numberLesson2: +lessons.numberLesson2,
      numberLesson3: +lessons.numberLesson3,
      numberLesson4: +lessons.numberLesson4,
      numberLesson5: +lessons.numberLesson5,
      numberLesson6: +lessons.numberLesson6,
      numberLesson7: +lessons.numberLesson7,
      // icon
      animalIcon1: lessons.animalIcon1,
      animalIcon2: lessons.animalIcon2,
      animalIcon3: lessons.animalIcon3,
      animalIcon4: lessons.animalIcon4,
      animalIcon5: lessons.animalIcon5,
      animalIcon6: lessons.animalIcon6,
      animalIcon7: lessons.animalIcon7,
// закиндаю до базии значення дейта атрибуту що передав пропсом з каунтера
      // витащу його в list sheduale
      coutDb: getElOnId.attributes["data-dbpropsfromcountatr"].value,
      comment: lessons.comment,
      moodGood: lessons.moodGood,
      colorProps,
      // id використовується я ключ до бази глянь в утилсах индекс дб**
      id: nanoid(),
      dateSh: lessons.dateSh,
      dayWeek: lessons.dayWeek,

      //++++++++++++++++++++++++++++
    };
    // до бази
    addItem(dayShedule);

    // console.log(dayShedule, 666);
    // чистка
    setLessons({
      dayWeek: "",
      numberLesson1: "1",
      lesson1: "",
      animalIcon1: "",
      numberLesson2: "2",
      animalIcon2: "",
      lesson2: "",
      numberLesson3: "3",
      animalIcon3: "",
      lesson3: "",
      numberLesson4: "4",
      animalIcon4: "",
      lesson4: "",
      numberLesson5: "5",
      animalIcon5: "",
      lesson5: "",
      numberLesson6: "6",
      animalIcon6: "",
      lesson6: "",
      numberLesson7: "7",
      animalIcon7: "",
      lesson7: "",
    });
  };

  // universall handl input
  const changerFormShedule = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "dayWeek": {
        // ususallu write on prevState **************************
        // console.log(value, 55566)

        setLessons((prevState) => ({ ...prevState, dayWeek: value }));
        break;
      }

      case "moodGood": {
        setLessons((prevState) => ({ ...prevState, moodGood: value }));
        // console.log(value, 9999999999);
        break;
      }

      case "numberLesson1": {
        if (value <= 7) {
          // ususallu write on prevState **************************
          // console.log(value, 55566)

          setLessons((prevState) => ({ ...prevState, numberLesson1: value }));
        }
        break;
      }

      case "numberLesson2": {
        if (value <= 7) {
          // ususallu write on prevState **************************

          setLessons((prevState) => ({ ...prevState, numberLesson2: value }));
        }
        break;
      }

      case "numberLesson3": {
        if (value <= 7) {
          // ususallu write on prevState **************************

          setLessons((prevState) => ({ ...prevState, numberLesson3: value }));
        }
        break;
      }

      case "numberLesson4": {
        if (value <= 7) {
          // ususallu write on prevState **************************

          setLessons((prevState) => ({ ...prevState, numberLesson4: value }));
        }
        break;
      }

      case "numberLesson5": {
        if (value <= 7) {
          // ususallu write on prevState **************************

          setLessons((prevState) => ({ ...prevState, numberLesson5: value }));
        }
        break;
      }

      case "numberLesson6": {
        if (value <= 7) {
          // ususallu write on prevState **************************

          setLessons((prevState) => ({ ...prevState, numberLesson6: value }));
        }
        break;
      }
      case "numberLesson7": {
        if (value <= 7) {
          // ususallu write on prevState **************************

          setLessons((prevState) => ({ ...prevState, numberLesson7: value }));
        }
        break;
      }

      case "lesson1": {
        // ususallu write on prevState **************************
        setLessons((prevState) => ({ ...prevState, lesson1: value }));

        break;
      }

      case "lesson2": {
        // ususallu write on prevState **************************
        setLessons((prevState) => ({ ...prevState, lesson2: value }));

        break;
      }

      case "lesson3": {
        // ususallu write on prevState **************************
        setLessons((prevState) => ({ ...prevState, lesson3: value }));

        break;
      }
      case "lesson4": {
        // ususallu write on prevState **************************
        setLessons((prevState) => ({ ...prevState, lesson4: value }));

        break;
      }

      case "lesson5": {
        // ususallu write on prevState **************************
        setLessons((prevState) => ({ ...prevState, lesson5: value }));

        break;
      }
      case "lesson6": {
        // ususallu write on prevState **************************
        setLessons((prevState) => ({ ...prevState, lesson6: value }));

        break;
      }

      case "lesson7": {
        // ususallu write on prevState **************************
        setLessons((prevState) => ({ ...prevState, lesson7: value }));

        break;
      }

      case "date": {
        setLessons((prevState) => ({
          ...prevState,
          dateSh: value,
        }));

        break;
      }

      case "animalIcon1": {
        setLessons((prevState) => ({ ...prevState, animalIcon1: value }));
        break;
      }
      case "animalIcon2": {
        setLessons((prevState) => ({ ...prevState, animalIcon2: value }));
        break;
      }
      case "animalIcon3": {
        setLessons((prevState) => ({ ...prevState, animalIcon3: value }));
        break;
      }
      case "animalIcon4": {
        setLessons((prevState) => ({ ...prevState, animalIcon4: value }));
        break;
      }
      case "animalIcon5": {
        setLessons((prevState) => ({ ...prevState, animalIcon5: value }));
        break;
      }
      case "animalIcon6": {
        setLessons((prevState) => ({ ...prevState, animalIcon6: value }));
        break;
      }
      case "animalIcon7": {
        setLessons((prevState) => ({ ...prevState, animalIcon7: value }));
        break;
      }

      case "comment": {
        // ususallu write on prevState **************************
        setLessons((prevState) => ({ ...prevState, comment: value }));
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
          value={lessons.dateSh}
          onChange={changerFormShedule}
        />
                <Select
          wraperClassProps={formSheduleStyle.selectWrap}
          labelClassProps={formSheduleStyle.labelSelectChoiseStyle}
          labelTextProps={"День тижня"}
          selectClassProps={formSheduleStyle.selectStyle}
          nameSelectProps={"dayWeek"}
          optionTextProps={""}
          optionClassProps={formSheduleStyle.optionStyle}
          valueOptio1Props={"Понеділок"}
          valueOptio2Props={"Вівторок"}
          valueOptio3Props={"Середа"}
          valueOptio4Props={"Четвер"}
          valueOptio5Props={"П'ятниця"}
          changerProps={changerFormShedule}
          idSelectProps={"animalIcon3ID"}
        />
     

                {/* radioooooooooooooooooooooooooooooooooooooooooooooooooooooooo */}
          <div className={formStyle.selectWrap}>
          <label
            className={formStyle.labelSelectChoiseStyle}
            htmlFor="moodGoodID"
          >
            Мій настрій: <span>👍</span>
          </label>

          <input
            type="radio"
            id="moodGoodID"
            name="moodGood"
            value="Fine"
            checked={lessons.moodGood === "Fine"}
            // !*!*!*!* The expression in the check will be like the TRUTH!*!*!*!* !*!*!*!*
            onChange={changerFormShedule}
          />
        </div>
         <Counter>
          {/* for e[amle used props children ] */}
          <p>😺</p>
        </Counter>
        <label className={formStyle.labelSelect} htmlFor="date">
          Мій настрій такий тому що...
        </label>
        <textarea
          className={formStyle.textAreaStyle}
          name="comment"
          id=""
          cols="30"
          rows="10"
          placeholder="Як ти вважаєш чому сьогодні у тебе саме такий настрій?"
          onChange={changerFormShedule}
          required
        ></textarea>

<p>Мій розклад</p>
        {/* 1 */}
        <div className={formSheduleStyle.wrapShedule}>
          <input
            className={formSheduleStyle.inputShedule}
            type="number"
            maxLength="2"
            name="numberLesson1"
            placeholder="№"
            value={lessons.numberLesson1}
            onChange={changerFormShedule}
          />

          <Select
            wraperClassProps={formSheduleStyle.selectWrap}
            labelClassProps={formSheduleStyle.labelSelectChoiseStyle}
            labelTextProps={"Істотка"}
            selectClassProps={formSheduleStyle.selectStyle}
            nameSelectProps={"animalIcon1"}
            optionTextProps={"Зоопарк"}
            optionClassProps={formSheduleStyle.optionStyle}
            valueOptio1Props={"🦍"}
            valueOptio2Props={"🐕"}
            valueOptio3Props={"🐈"}
            valueOptio4Props={"🐅"}
            valueOptio5Props={"🐆"}
            valueOptio6Props={"🐎"}
            valueOptio7Props={"🦓"}
            valueOptio8Props={"🦬"}
            valueOptio9Props={"🐫"}
            valueOptio10Props={"🦌"}
            valueOptio11Props={"🐀"}
            valueOptio12Props={"🦆"}
            valueOptio13Props={"🦣"}
            changerProps={changerFormShedule}
            idSelectProps={"animalIcon1ID"}
          />

          {/* ------------------------------------------------------  */}

          <p
            className={formSheduleStyle.iconAnimals}
            style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
          >
            {lessons.animalIcon1}
          </p>

          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson1"
            placeholder="Назва предмету"
            value={lessons.lesson1}
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
            value={lessons.numberLesson2}
            onChange={changerFormShedule}
          />

          <Select
            wraperClassProps={formSheduleStyle.selectWrap}
            labelClassProps={formSheduleStyle.labelSelectChoiseStyle}
            labelTextProps={"Істотка"}
            selectClassProps={formSheduleStyle.selectStyle}
            nameSelectProps={"animalIcon2"}
            optionTextProps={"Зоопарк"}
            optionClassProps={formSheduleStyle.optionStyle}
            valueOptio1Props={"🦍"}
            valueOptio2Props={"🐕"}
            valueOptio3Props={"🐈"}
            valueOptio4Props={"🐅"}
            valueOptio5Props={"🐆"}
            valueOptio6Props={"🐎"}
            valueOptio7Props={"🦓"}
            valueOptio8Props={"🦬"}
            valueOptio9Props={"🐫"}
            valueOptio10Props={"🦌"}
            valueOptio11Props={"🐀"}
            valueOptio12Props={"🦆"}
            valueOptio13Props={"🦣"}
            changerProps={changerFormShedule}
            idSelectProps={"animalIcon2ID"}
          />

          <p
            className={formSheduleStyle.iconAnimals}
            style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
          >
            {lessons.animalIcon2}
          </p>
          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson2"
            placeholder="Назва предмету"
            value={lessons.lesson2}
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
            value={lessons.numberLesson3}
            onChange={changerFormShedule}
          />

          <Select
            wraperClassProps={formSheduleStyle.selectWrap}
            labelClassProps={formSheduleStyle.labelSelectChoiseStyle}
            labelTextProps={"Істотка"}
            selectClassProps={formSheduleStyle.selectStyle}
            nameSelectProps={"animalIcon3"}
            optionTextProps={"Зоопарк"}
            optionClassProps={formSheduleStyle.optionStyle}
            valueOptio1Props={"🦍"}
            valueOptio2Props={"🐕"}
            valueOptio3Props={"🐈"}
            valueOptio4Props={"🐅"}
            valueOptio5Props={"🐆"}
            valueOptio6Props={"🐎"}
            valueOptio7Props={"🦓"}
            valueOptio8Props={"🦬"}
            valueOptio9Props={"🐫"}
            valueOptio10Props={"🦌"}
            valueOptio11Props={"🐀"}
            valueOptio12Props={"🦆"}
            valueOptio13Props={"🦣"}
            changerProps={changerFormShedule}
            idSelectProps={"animalIcon3ID"}
          />

          <p
            className={formSheduleStyle.iconAnimals}
            style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
          >
            {lessons.animalIcon3}
          </p>

          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson3"
            placeholder="Назва предмету"
            value={lessons.lesson3}
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
            value={lessons.numberLesson4}
            onChange={changerFormShedule}
          />
          <Select
            wraperClassProps={formSheduleStyle.selectWrap}
            labelClassProps={formSheduleStyle.labelSelectChoiseStyle}
            labelTextProps={"Істотка"}
            selectClassProps={formSheduleStyle.selectStyle}
            nameSelectProps={"animalIcon4"}
            optionTextProps={"Зоопарк"}
            optionClassProps={formSheduleStyle.optionStyle}
            valueOptio1Props={"🦍"}
            valueOptio2Props={"🐕"}
            valueOptio3Props={"🐈"}
            valueOptio4Props={"🐅"}
            valueOptio5Props={"🐆"}
            valueOptio6Props={"🐎"}
            valueOptio7Props={"🦓"}
            valueOptio8Props={"🦬"}
            valueOptio9Props={"🐫"}
            valueOptio10Props={"🦌"}
            valueOptio11Props={"🐀"}
            valueOptio12Props={"🦆"}
            valueOptio13Props={"🦣"}
            changerProps={changerFormShedule}
            idSelectProps={"animalIcon4ID"}
          />

          <p
            className={formSheduleStyle.iconAnimals}
            style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
          >
            {lessons.animalIcon4}
          </p>

          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson4"
            placeholder="Назва предмету"
            value={lessons.lesson4}
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
            value={lessons.numberLesson5}
            onChange={changerFormShedule}
          />
          <Select
            wraperClassProps={formSheduleStyle.selectWrap}
            labelClassProps={formSheduleStyle.labelSelectChoiseStyle}
            labelTextProps={"Істотка"}
            selectClassProps={formSheduleStyle.selectStyle}
            nameSelectProps={"animalIcon5"}
            optionTextProps={"Зоопарк"}
            optionClassProps={formSheduleStyle.optionStyle}
            valueOptio1Props={"🦍"}
            valueOptio2Props={"🐕"}
            valueOptio3Props={"🐈"}
            valueOptio4Props={"🐅"}
            valueOptio5Props={"🐆"}
            valueOptio6Props={"🐎"}
            valueOptio7Props={"🦓"}
            valueOptio8Props={"🦬"}
            valueOptio9Props={"🐫"}
            valueOptio10Props={"🦌"}
            valueOptio11Props={"🐀"}
            valueOptio12Props={"🦆"}
            valueOptio13Props={"🦣"}
            changerProps={changerFormShedule}
            idSelectProps={"animalIcon5ID"}
          />

          <p
            className={formSheduleStyle.iconAnimals}
            style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
          >
            {lessons.animalIcon5}
          </p>

          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson5"
            placeholder="Назва предмету"
            value={lessons.lesson5}
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
            value={lessons.numberLesson6}
            onChange={changerFormShedule}
          />
          <Select
            wraperClassProps={formSheduleStyle.selectWrap}
            labelClassProps={formSheduleStyle.labelSelectChoiseStyle}
            labelTextProps={"Істотка"}
            selectClassProps={formSheduleStyle.selectStyle}
            nameSelectProps={"animalIcon6"}
            optionTextProps={"Зоопарк"}
            optionClassProps={formSheduleStyle.optionStyle}
            valueOptio1Props={"🦍"}
            valueOptio2Props={"🐕"}
            valueOptio3Props={"🐈"}
            valueOptio4Props={"🐅"}
            valueOptio5Props={"🐆"}
            valueOptio6Props={"🐎"}
            valueOptio7Props={"🦓"}
            valueOptio8Props={"🦬"}
            valueOptio9Props={"🐫"}
            valueOptio10Props={"🦌"}
            valueOptio11Props={"🐀"}
            valueOptio12Props={"🦆"}
            valueOptio13Props={"🦣"}
            changerProps={changerFormShedule}
            idSelectProps={"animalIcon6ID"}
          />

          <p
            className={formSheduleStyle.iconAnimals}
            style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
          >
            {lessons.animalIcon6}
          </p>

          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson6"
            placeholder="Назва предмету"
            value={lessons.lesson6}
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
            value={lessons.numberLesson7}
            onChange={changerFormShedule}
          />
          <Select
            wraperClassProps={formSheduleStyle.selectWrap}
            labelClassProps={formSheduleStyle.labelSelectChoiseStyle}
            labelTextProps={"Істотка"}
            selectClassProps={formSheduleStyle.selectStyle}
            nameSelectProps={"animalIcon7"}
            optionTextProps={"Зоопарк"}
            optionClassProps={formSheduleStyle.optionStyle}
            valueOptio1Props={"🦍"}
            valueOptio2Props={"🐕"}
            valueOptio3Props={"🐈"}
            valueOptio4Props={"🐅"}
            valueOptio5Props={"🐆"}
            valueOptio6Props={"🐎"}
            valueOptio7Props={"🦓"}
            valueOptio8Props={"🦬"}
            valueOptio9Props={"🐫"}
            valueOptio10Props={"🦌"}
            valueOptio11Props={"🐀"}
            valueOptio12Props={"🦆"}
            valueOptio13Props={"🦣"}
            changerProps={changerFormShedule}
            idSelectProps={"animalIcon7ID"}
          />

          <p
            className={formSheduleStyle.iconAnimals}
            style={{ border: "RGB(" + r + "," + g + "," + b + ")1px solid" }}
          >
            {lessons.animalIcon7}
          </p>
          {/* 🦕 */}
          <input
            className={formStyle.inputStyle}
            type="string"
            maxLength="25"
            name="lesson7"
            placeholder="Назва предмету"
            // value={lesson7}
            value={lessons.lesson7}
            onChange={changerFormShedule}
          />
        </div>
        {children}

        <Button
          nameBtn="Зберегти"
          classNameProps={formStyle.buttonStyle}
          idProps={"btnInFormShedule"}
        />
      </form>
    </>
  );
};

FormShedule.propTypes = {
  colorProps: PropTypes.string,
  children: PropTypes.node,
};

export default FormShedule;
