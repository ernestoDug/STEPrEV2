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
const List = ({ arrayProps = [], colorProps }) => {
  const Items = arrayProps.map((items) => (
    // we used color props fo BG
    <LiStyle style={{ backgroundColor: colorProps } } key={nanoid()}>
      <h2>{items.dayWeek}</h2>
      <h3>{items.dateSh}</h3>
      <DivStyleList>
        <PeStyleList>
          {" "}
          <SpanStyleList>{items.numberLesson1}</SpanStyleList> {items.lesson1}
        </PeStyleList>
      </DivStyleList>

      <DivStyleList>
        <PeStyleList>
          {" "}
          <SpanStyleList>{items.numberLesson2}</SpanStyleList> {items.lesson2}
        </PeStyleList>
      </DivStyleList>

      <DivStyleList>
        <PeStyleList>
          {" "}
          <SpanStyleList>{items.numberLesson3}</SpanStyleList> {items.lesson3}
        </PeStyleList>
      </DivStyleList>
      <DivStyleList>
        <PeStyleList>
          {" "}
          <SpanStyleList>{items.numberLesson4}</SpanStyleList> {items.lesson4}
        </PeStyleList>
      </DivStyleList>
      <DivStyleList>
        <PeStyleList>
          {" "}
          <SpanStyleList>{items.numberLesson5}</SpanStyleList> {items.lesson5}
        </PeStyleList>
      </DivStyleList>
      <DivStyleList>
        <PeStyleList>
          {" "}
          <SpanStyleList>{items.numberLesson6}</SpanStyleList> {items.lesson6}
        </PeStyleList>
      </DivStyleList>
      <DivStyleList>
        <PeStyleList>
          {" "}
          <SpanStyleList>{items.numberLesson7}</SpanStyleList> {items.lesson7}
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
