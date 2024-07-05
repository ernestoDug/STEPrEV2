import { nanoid } from "nanoid";
// npm i nanoid
import Deliter from "../Deliter/Deliter";

import {
  UlStyle,
  DivStyleList,
  PeStyleList,
  SpanStyleList,
  LiStyle,
} from "./ListSheduale.module";

import PropTypes from "prop-types";

// colorProps for change bg
const ListSheduale = ({ arrayProps = [] }) => {
  const goodMood = (
    <SpanStyleList>
     Мій настрій:   <SpanStyleList>Чудовий👍  </SpanStyleList>
     </SpanStyleList>
  );
  // example1  const for use in  render dom nodes conditional
  const badMood = (  <SpanStyleList>
     Мій настрій:   <SpanStyleList> Так собі👎 </SpanStyleList>
     </SpanStyleList>);

  // const for render
  const Items = arrayProps.map((items) => (
    // we used color props fo BG
    // items.colorProps це в базу даних той пропс закинули

    <>
      <LiStyle style={{ backgroundColor: items.colorProps }} key={nanoid()}>
        <Deliter idPropsFromDbForDelite={items.id} />
        <h2>{items.dayWeek}</h2>
        <h3>{items.dateSh}</h3>

        <DivStyleList>
          <PeStyleList>
            {" "}
            <SpanStyleList>{items.numberLesson1}</SpanStyleList>
            <span>{items.animalIcon1}</span>
            {/* conditional  */}
            {items.lesson1 ? items.lesson1 : "Урок не вказано"}
          </PeStyleList>
        </DivStyleList>

        <DivStyleList>
          <PeStyleList>
            {" "}
            <SpanStyleList>{items.numberLesson2}</SpanStyleList>
            <span>{items.animalIcon2}</span>
            {/* conditional  */}
            {items.lesson2 ? items.lesson2 : "Урок не вказано"}
          </PeStyleList>
        </DivStyleList>

        <DivStyleList>
          <PeStyleList>
            {" "}
            <SpanStyleList>{items.numberLesson3}</SpanStyleList>
            <span>{items.animalIcon3}</span>
            {/* conditional  */}
            {items.lesson3 ? items.lesson3 : "Урок не вказано"}
          </PeStyleList>
        </DivStyleList>

        <DivStyleList>
          <PeStyleList>
            {" "}
            <SpanStyleList>{items.numberLesson4}</SpanStyleList>
            <span>{items.animalIcon4}</span>
            {/* conditional  */}
            {items.lesson4 ? items.lesson4 : "Урок не вказано"}
          </PeStyleList>
        </DivStyleList>

        <DivStyleList>
          <PeStyleList>
            {" "}
            <SpanStyleList>{items.numberLesson5}</SpanStyleList>
            <span>{items.animalIcon5}</span>
            {/* conditional  */}
            {items.lesson5 ? items.lesson5 : "Урок не вказано"}
          </PeStyleList>
        </DivStyleList>

        <DivStyleList>
          <PeStyleList>
            {" "}
            <SpanStyleList>{items.numberLesson6}</SpanStyleList>
            <span>{items.animalIcon6}</span>
            {/* conditional  */}
            {items.lesson6 ? items.lesson6 : "Урок не вказано"}
          </PeStyleList>
        </DivStyleList>

        <DivStyleList>
          <PeStyleList>
            {" "}
            <SpanStyleList>{items.numberLesson7}</SpanStyleList>
            <span>{items.animalIcon7}</span>
            {/* conditional  */}
            {items.lesson7 ? items.lesson7 : "Урок не вказано"}{" "}
          </PeStyleList>
        </DivStyleList>
        <SpanStyleList>
  Мої справи: {items.coutDb}
  </SpanStyleList>

 {/* conditional render wsth const 
    For the truth, we accepted the expression in the form in !*!*!*!*  */}
  {items.moodGood ? goodMood : badMood}

  <PeStyleList>

Мій настрій сьогодні такий тому що...{items.comment}
</PeStyleList>

      </LiStyle>
    </>
  ));
  // console.log(arrayProps, 999999);

  return <UlStyle>{Items}</UlStyle>;
};

{
  /* conditional rendering WITH && !!!!!!!!!!!!!!!!!!!!!!!!!!!BIGAN
      тут ми замість :  нал тобто нічого не повртай постаивли одразу два амперсанди без тенарника
      тобто тільи якщо довдин більше нуля інакше нічого 
      */
}
{
  /* {arrayProps.length > 0 && (
        <>
           <UlStyle> {fruitItemsFilter}</UlStyle>
        </>conditional rendering WITH && !!!!!!!!!!!!!!!!!!!!!!!!!!!END*/
}

ListSheduale.propTypes = {
  arrayProps: PropTypes.arrayOf(
    PropTypes.shape({
      lesson1: PropTypes.string,
      numberLesson1: PropTypes.number,
      lesson2: PropTypes.string,
      numberLesson2: PropTypes.number,
      lesson3: PropTypes.string,
      numberLesson3: PropTypes.number,
      lesson4: PropTypes.string,
      numberLesson4: PropTypes.number,
      lesson5: PropTypes.string,
      numberLesson5: PropTypes.number,
      lesson6: PropTypes.string,
      numberLesson6: PropTypes.number,
      lesson7: PropTypes.string,
      numberLesson7: PropTypes.number,
    })
  ),
  colorProps: PropTypes.string,
};

export default ListSheduale;
