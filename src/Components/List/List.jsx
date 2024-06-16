import { nanoid } from "nanoid";
// npm i nanoid
import {
  UlStyle,
  DivStyleList,
  PeStyleList,
  SpanStyleList,
  LiStyle,
} from "./List.module";

import PropTypes from "prop-types";

// colorProps for change bg
const List = ({ arrayProps = [] }) => {
  const Items = arrayProps.map((items) => (
    // we used color props fo BG
    // items.colorProps це в базу даних той пропс закинули 
    <LiStyle style={{ backgroundColor: items.colorProps } } key={nanoid()}>
      <h2>{items.dayWeek}</h2>
      <h3>{items.dateSh}</h3>
      <DivStyleList>
        <PeStyleList>
          {" "}
          <SpanStyleList>{items.numberLesson1}</SpanStyleList> 
          <p>{items.animalIcon1}</p>
          {items.lesson1}
        </PeStyleList>
      </DivStyleList>

      <DivStyleList>
        <PeStyleList>
          {" "}
          <SpanStyleList>{items.numberLesson2}</SpanStyleList> 
          <p>{items.animalIcon2}</p>
          {items.lesson2}
        </PeStyleList>
      </DivStyleList>

      <DivStyleList>
        <PeStyleList>
          {" "}
          <SpanStyleList>{items.numberLesson3}</SpanStyleList> 
          <p>{items.animalIcon3}</p>
          {items.lesson3}
        </PeStyleList>
      </DivStyleList>
      <DivStyleList>
        <PeStyleList>
          {" "}
          <SpanStyleList>{items.numberLesson4}</SpanStyleList> 
          <p>{items.animalIcon4}</p>
          {items.lesson4}
        </PeStyleList>
      </DivStyleList>
      <DivStyleList>
        <PeStyleList>
          {" "}
          <SpanStyleList>{items.numberLesson5}</SpanStyleList>
          <p>{items.animalIcon5}</p>
           {items.lesson5}
        </PeStyleList>
      </DivStyleList>
      <DivStyleList>
        <PeStyleList>
          {" "}
          <SpanStyleList>{items.numberLesson6}</SpanStyleList> 
          <p>{items.animalIcon6}</p>
          {items.lesson6}
        </PeStyleList>
      </DivStyleList>
      <DivStyleList>
        <PeStyleList>
          {" "}
          <SpanStyleList>{items.numberLesson7}</SpanStyleList> 
          <p>{items.animalIcon7}</p>
          {items.lesson7}
        </PeStyleList>
      </DivStyleList>
    </LiStyle>
  ));

  return (
    <>
      {/* conditional rendering */}
      {arrayProps.length > 0 ? (
        <>
          <UlStyle>{Items}</UlStyle>
        </>
      ) : null}
      ;
      {/* conditional rendering WITH && !!!!!!!!!!!!!!!!!!!!!!!!!!!BIGAN
      тут ми замість :  нал тобто нічого не повртай постаивли одраду два амперсанди без тенарника
      тобто тільи якщо довдин більше нуля інакше нічого 
      */}
      {/* {arrayProps.length > 0 && (
        <>
           <UlStyle> {fruitItemsFilter}</UlStyle>
        </>conditional rendering WITH && !!!!!!!!!!!!!!!!!!!!!!!!!!!END*/}
    </>
  );
};

List.propTypes = {
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

export default List;
