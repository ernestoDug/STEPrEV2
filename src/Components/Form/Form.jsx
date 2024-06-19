import { nanoid } from "nanoid";
// npm i nanoid
import PropTypes from "prop-types";
import { useState } from "react";

import { addItem } from "../../utils/indexdb";

import Button from "../Button/Button";

import formStyle from "./Form.module.css";
import Counter from "../Counter/Counter";

const Form = () => {
  const [nameMyDay, setnameMyDay] = useState("");
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [comment, setComment] = useState("");
  const [isСompleted, setIsСompleted] = useState("");
  const [moodGood, setMoodGood] = useState("");
  const submiter = (e) => {
    e.preventDefault();
    // отрима. елемент по аді 
    let getElOnId = document.getElementById("btnInCount");

    // console.log(getElOnId.attributes["data-dbPropsFromCountAtr"].value, "po id dataAtr99");

    // id використовується я ключ до бази глянь в утилсах индекс дб**
    const day = {
      nameMyDay,
      date,
      isСompleted,
      moodGood,
      id: nanoid(),
      comment,
      // закиндаю до базии значення дейта атрибуту що передав пропсом з каунтера 
      // витащу його в дей
      coutDb: getElOnId.attributes["data-dbpropsfromcountatr"].value,
    };

    // до бази
    addItem(day);

    // console.log(day, 999);
    setnameMyDay("");
    setComment(" ");
  };

  // universall handle
  const changerForm = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "nameMyDay": {
        setnameMyDay( value);
        break;
      }

      case "isСompleted": {
        setIsСompleted(value);
        break;
      }

      case "moodGood": {
        setMoodGood(value);
        // console.log(value, 9999999999);
        break;
      }

      case "date": {
        setDate(value);
        break;
      }

      case "comment": {
        setComment(value);
        break;
      }

      default:
        return;
    }
  };

  return (
    <>
      <form className={formStyle.formStyles} action="" onSubmit={submiter}>
        <label className={formStyle.labelSelect} htmlFor="dateID">
          Сьогодні:
        </label>
        <input
          className={formStyle.inputStyle}
          type="date"
          name="date"
          id="dateID"
          placeholder="дд.мм.рр"
          value={date}
          onChange={changerForm}
        />

        <label className={formStyle.labelSelect} htmlFor="nameMyDayID">
          Цей день я назову:
        </label>
        <input
          className={formStyle.inputStyle}
          type="text"
          maxLength="25"
          name="nameMyDay"
          id="nameMyDayID"
          placeholder="я називаю цей день..."
          value={nameMyDay}
          required
          onChange={changerForm}
        />

        <div className={formStyle.selectWrap}>
          <label
            className={formStyle.labelSelectChoiseStyle}
            htmlFor="isСompleted"
          >
            Чи приходила сьогодні до мене посмішка?{" "}
          </label>
          <select
            className={formStyle.selectStyle}
            onChange={changerForm}
            name="isСompleted"
            id=""
            value={isСompleted}
            required
          >
            <option value="">обирай-КA</option>
            <option className={formStyle.optionYes} value="завітала">
              А якже
            </option>
            <option className={formStyle.optionNo} value="забула...">
              Можливо...
            </option>
          </select>
        </div>

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
            checked={moodGood === "Fine"}
            // !*!*!*!* The expression in the check will be like the TRUTH!*!*!*!* !*!*!*!*
            onChange={changerForm}
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
          onChange={changerForm}
          required
        ></textarea>

        <Button nameBtn="Зберегти"
         classNameProps={formStyle.buttonStyle}
         idProps={"btnInForm"}
         
          />
      </form>
    </>
  );
};

// проптайпи
Form.propTypes = {
  value: PropTypes.string,
  changer: PropTypes.func,
};

export default Form;
