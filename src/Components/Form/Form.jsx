import { nanoid } from "nanoid";
// npm i nanoid
import PropTypes from "prop-types";
import { useState } from "react";

import { addItem } from "../../utils/indexdb";

import Button from "../Button/Button";

import formStyle  from "./Form.module.css";

const Form = () => {
  const [nameMyDay, setnameMyDay] = useState("");
  const [ageMy, setAge] = useState("");
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [comment, setComment] = useState("");
  const [isСompleted, setIsСompleted] = useState("");
  const [isLoginMy, setIsLogin] = useState("");

  const submiter = (e) => {
    e.preventDefault();

    // id використовується я ключ до бази глянь в утилсах индекс дб**
    const day = {
      nameMyDay,
      ageMy: +ageMy,
      date,
      isСompleted,
      isLoginMy,
      id: nanoid(),
      comment,
    };

    // до бази
    addItem(day);
    console.log(day, 999);
    setnameMyDay("");
    setComment("");
    setAge("");
  };

  // universall handle
  const changerForm = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "nameMyDay": {
        setnameMyDay(value);
        break;
      }

      case "isСompleted": {
        setIsСompleted(value);
        break;
      }

      case "isLoginMy": {
        setIsLogin(value);
        console.log(value, 9999999999);
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

      case "ageMy": {
        setAge(+value);
        break;
      }
      default:
        return;
    }
  };

  return (
    <>
      < form className={formStyle.formStyles}  action="" onSubmit={submiter}>
      <input className= {formStyle.inputStyle} 
          type="string"
          maxLength={5}
          name="nameMyDay"
          placeholder="name this day"
          value={nameMyDay}
          onChange={changerForm}
        />

        <input className= {formStyle.inputStyle} 
          type="number"
          name="ageMy"
          placeholder="number of useful things you plan to do"
          value={ageMy}
          onChange={changerForm}
        />

<input className= {formStyle.inputStyle} 
          type="date"
          name="date"
          placeholder="dd.мм.yy"
          value={date}
          onChange={changerForm}
        />
        <div>
          < select className= {formStyle.divSelectStyle}
            onChange={changerForm}
            name="isСompleted"
            id=""
            value={isСompleted}
          >
            <option value="">check mark</option>
            <option value="yes">yes</option>
            <option value="No">No I have unfinished business</option>
          </select>
        </div>
        {/* radioooooooooooooooooooooooooooooooooooooooooooooooooooooooo */}
        <div>
          <input
            type="radio"
            id="stud"
            name="isLoginMy"
            value="Fine"
            checked={isLoginMy === "Fine"}
            // !*!*!*!* The expression in the check will be like the TRUTH!*!*!*!* !*!*!*!*
            onChange={changerForm}
          />
          <label>My mood is FINE </label>
        </div>

        <textarea className={formStyle.textAreaStyle}
          name="comment"
          id=""
          cols="30"
          rows="10"
          placeholder="Why do you think you have unfinished business?"
          onChange={changerForm}
        ></textarea>
        {/* <ButtonStyle type="submit">Save</ButtonStyle> */}
        <Button nameBtn="Save" classNameProps={formStyle.buttonStyle}
        
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
