import PropTypes from "prop-types";
import { useState } from "react";

import Students from "../Students/Students";

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
  const [nameMy, setName] = useState("");
  const [ageMy, setAge] = useState("");

  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [comment, setComment] = useState("");
  const [isStudentMy, setIsStudent] = useState("");
  const [isLoginMy, setIsLogin] = useState("");

  

  const submiter = (e) => {
    e.preventDefault();

    changer(nameMy, date, comment);
    // To clean the field field after sending

    setName("");
    setComment("");
    setAge("");
    // setIsStudent(false);
  };

  // оuniversall haydl
  const changerForm = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "nameMy": {
        setName(value);
        break;
      }

      case "isStudentMy": {
        setIsStudent(value);
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
          name="nameMy"
          placeholder="input name"
          value={nameMy}
          onChange={changerForm}
        />

        <InputStyle
          type="number"
          name="ageMy"
          placeholder="input age"
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
            name="isStudentMy"
            id=""
            value={isStudentMy}
          >
            <option value="">Select an status</option>
            <option value="student">student</option>
            <option value="Not are student">Not are student</option>
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

      {nameMy ? (
        <>
          <Students
            name={nameMy}
            age={+ageMy}
            isStudent={isStudentMy}
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
