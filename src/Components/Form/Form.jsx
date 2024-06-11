import PropTypes from "prop-types";
import { useState } from "react";

import Day from "../Day/Day";

import {
  FormStyle,
  InputStyle,
  ButtonStyle,
  TextAreaStyle,
  DivInputStyle,
} from "./Form.module";
// npx storybook@latest init
// npm run storybook
// краще компонент там створити протестувати а потім вже вставити собі
// зразок в навва сторис джиек икс тільки воно ніхрена не працює

const Form = ({ changer }) => {
  const [nameMyDay, setnameMyDay] = useState("");
  const [ageMy, setAge] = useState("");

  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [comment, setComment] = useState("");
  const [isСompleted, setIsСompleted] = useState("");
  const [isLoginMy, setIsLogin] = useState("");

  

  const submiter = (e) => {
    e.preventDefault();
    console.log(e,444444444444444);

    changer(nameMyDay, date, comment);
    // To clean the field field after sending

    setnameMyDay("");
    setComment("");
    setAge("");
    // setIsStudent(false);
  };

  // оuniversall haydl
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
      <FormStyle action="" onSubmit={submiter}>
        <InputStyle
          type="string"
          name="nameMyDay"
          placeholder="name this day"
          value={nameMyDay}
          onChange={changerForm}
        />

        <InputStyle
          type="number"
          name="ageMy"
          placeholder="number of useful things you plan to do"
          value={ageMy}
          onChange={changerForm}
        />

        <InputStyle
          type="date"
          name="date"
          placeholder="чч.мм.рр"
          value={date}
          onChange={changerForm}
        />
        <DivInputStyle>
          <select
            onChange={changerForm}
            name="isСompleted"
            id=""
            value={isСompleted}
          >
            <option value="">check mark</option>
            <option value="yes">yes</option>
            <option value="No">No I have unfinished business</option>
          </select>
        </DivInputStyle>
{/* radioooooooooooooooooooooooooooooooooooooooooooooooooooooooo */}
        <DivInputStyle>
          <input type="radio" id="stud" name="isLoginMy" value="Login" 
          checked = {isLoginMy === 'Login'}
          // !*!*!*!* The expression in the check will be like the TRUTH!*!*!*!* !*!*!*!* 
          onChange={changerForm}
          />
          <label>Login</label>
        </DivInputStyle>

        <TextAreaStyle
          name="comment"
          id=""
          cols="30"
          rows="10"
          placeholder="Залиште коментар"
          onChange={changerForm}
        ></TextAreaStyle>
        <ButtonStyle type="submit">Зберегти</ButtonStyle>
      </FormStyle>

      {/* // ************************************************st */}

      {nameMyDay ? (
        <>
          <Day
            name={nameMyDay}
            age={+ageMy}
            isСompleted={isСompleted}
            isLogin={isLoginMy}
          />

                 </>
      ) : null}
    </>
  );
};

// проптайпи
Form.propTypes = {
  value: PropTypes.string,
  changer: PropTypes.func,
};

export default Form;
