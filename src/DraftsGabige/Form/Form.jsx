import { nanoid } from "nanoid";
// npm i nanoid
import PropTypes from "prop-types";
import { useState } from "react";

import { addItem } from "../../utils/indexdb";

import Button from "../../Components/Button/Button";

import formStyle from "./Form.module.css";
import Counter from "../../Components/Counter/Counter";
import Select from "../../Components/Select/Select";

const Form = () => {
  // obj for state
  const [myDay, setMyDay] = useState({
    nameMyDay: "",
    date: new Date().toISOString().substring(0, 10),
    comment: "",
    isСompleted: "",
    moodGood: "",
  });

  const submiter = (e) => {
    e.preventDefault();
    // отрима. елемент по аді
    let getElOnId = document.getElementById("btnInCount");

    // console.log(getElOnId.attributes["data-dbPropsFromCountAtr"].value, "po id dataAtr99");

    // id використовується я ключ до бази глянь в утилсах индекс дб**
    const day = {
      nameMyDay: myDay.nameMyDay,
      date: myDay.nameMyDay,
      isСompleted: myDay.isСompleted,
      moodGood: myDay.moodGood,
      id: nanoid(),
      comment: myDay.comment,
      // закиндаю до базии значення дейта атрибуту що передав пропсом з каунтера
      // витащу його в дей
      coutDb: getElOnId.attributes["data-dbpropsfromcountatr"].value,
    };

    // до бази
    addItem(day);
    // console.log(day, 999);
    setMyDay({ myDay: "", comment: " " });
  };

  // universall handle
  const changerForm = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "nameMyDay": {
        // ususallu write on prevState **************************
        setMyDay((prevState) => ({ ...prevState, nameMyDay: value }));
        break;
      }

      case "isСompleted": {
        // ususallu write on prevState **************************
        setMyDay((prevState) => ({ ...prevState, isСompleted: value }));

        break;
      }

      case "moodGood": {
        setMyDay((prevState) => ({ ...prevState, moodGood: value }));
        // console.log(value, 9999999999);
        break;
      }

      case "date": {
        // ususallu write on prevState **************************
        setMyDay((prevState) => ({ ...prevState, date: value }));
        break;
      }

      case "comment": {
        // ususallu write on prevState **************************
        setMyDay((prevState) => ({ ...prevState, comment: value }));
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
          value={myDay.date}
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
          value={myDay.nameMyDay}
          required
          onChange={changerForm}
        />

        <Select
          wraperClassProps={formStyle.selectWrap}
          labelClassProps={formStyle.labelSelectChoiseStyle}
          labelTextProps={"Чи завітала сьогодні до мене посмішка?"}
          selectClassProps={formStyle.selectStyle}
          nameSelectProps={"animalIcon1"}
          optionTextProps={"обирай-КA"}
          optionClassProps={formStyle.optionYes}
          optionClassProps2={formStyle.optionNo}
          valueOptio1Props={"завітала"}
          valueOptio2Props={"забула..."}
          changerProps={changerForm}
          idSelectProps={"moodGoodID"}
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
            checked={myDay.moodGood === "Fine"}
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

        <Button
          nameBtn="Зберегти"
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
