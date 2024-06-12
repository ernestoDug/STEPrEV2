import { nanoid } from "nanoid";
// npm i nanoid
import PropTypes from "prop-types";
import { useState } from "react";

import { addItem } from "../../utils/indexdb";


import {
  FormStyle,
  InputStyle,
  ButtonStyle,
  TextAreaStyle,
  DivSelectStyle,
} from "./Form.module";
// npx storybook@latest init
// npm run storybook
// краще компонент там створити протестувати а потім вже вставити собі
// зразок в навва сторис джиек икс тільки воно ніхрена не працює

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

  

  // universall hadl
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
          <div>
            <DivSelectStyle
              onChange={changerForm}
              name="isСompleted"
              id=""
              value={isСompleted}
            >
              <option value="">check mark</option>
              <option value="yes">yes</option>
              <option value="No">No I have unfinished business</option>
            </DivSelectStyle>
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
            <label>My mood is</label>
          </div>

          <TextAreaStyle
            name="comment"
            id=""
            cols="30"
            rows="10"
            placeholder="Why do you think you have unfinished business?"
            onChange={changerForm}
          ></TextAreaStyle>
          <ButtonStyle type="submit">Save</ButtonStyle>
        </FormStyle>

        {/* // ************************************************st */}

      
       </>
  );
};

// проптайпи
Form.propTypes = {
  value: PropTypes.string,
  changer: PropTypes.func,
};

export default Form;
