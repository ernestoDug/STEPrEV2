import { useState } from "react";
import { addItem } from "../../utils/indexdb";




const FormShedule = () => {
    const [lesson, setLesson] = useState("");
    const [numberLesson, setNumberLesson] = useState("");



// id використовується я ключ до бази глянь в утилсах индекс дб**
const submiterSheduleForm = (e) => {
    e.preventDefault();
   
const dayShedule = {
    lesson,
    numberLesson: +numberLesson,
    // date,
      };
 // до бази
  addItem(dayShedule);
  console.log(dayShedule, 666);
  setLesson("");
  setNumberLesson("");
};




 // universall handl input
 const changerFormShedule = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "lesson": {
        setLesson(value);
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



    return (

        <>
         <form action="" onSubmit={submiterSheduleForm}>
             <input
               type="number"
               name="numberLesson"
               placeholder="number of useful things you plan to do"
               value={numberLesson}
               onChange={changerFormShedule}
             />


          <input
            type="string"
            name="lesson"
            placeholder="number lesson"
            value={lesson}
            onChange={changerFormShedule}
          />

         </form>
        </>
    )
}

export default FormShedule;