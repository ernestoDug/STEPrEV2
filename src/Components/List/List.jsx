import { nanoid } from "nanoid";
// npm i nanoid
import { UlStyle } from "./List.module";

import PropTypes from "prop-types";

const List = ({ arrayProps = [], categories = "none" }) => {
  // alphabetical sorting or reverse sort:

  // check localeCompare allows comparison taking into account the rules of the language

  // fruits.sort((a, b) => a.type.localeCompare(b.type));

  // sorting calories
  // fruits.sort((a, b) => a.callories - b.callories);

  
  const fruitItems = arrayProps.map((items) => (
    <li key={nanoid()}>
      <h2>{items.dayWeek}</h2>
      <h3>{items.dateSh}</h3>
      <b>{items.numberLesson}</b>.
            {items.lesson} 
    </li>
    
    // &nbsp;
    // Non-breaking space - not allowing
    // display and print programs break the line at this point.
    ));
  // filter fruits ..
  // const filtertFruts = fruits.filter((fruit) => fruit.callories < 88);

  // const fruitItemsFilter = filtertFruts.map((filtertFruct) => (
  //   <li key={nanoid()}>
  //     {filtertFruct.type} &nbsp;
  //     <b>{filtertFruct.callories}</b> <span>kcall</span>
  //   </li>
  // ));
  return (
    <>
      {/* conditional rendering */}
      {arrayProps.length > 0 ? (
        <>
          <h2>ALL {categories}: </h2>
          <UlStyle>{fruitItems}</UlStyle>
        </>
      ) : null}
      ;{/* conditional rendering 
      тут ми замість :  нал тобто нічого не повртай постаивли одраду два амперсанди без тенарника
      тобто тільи якщо довдин більше нуля інакше нічого 
      */}
      {/* {fruits.length > 0 && (
        <>
          <h2>filter on kcalories {categories}</h2>
          <OlStyle> {fruitItemsFilter}</OlStyle>
        </>
      )} */}
    </>
  );
};

List.propTypes = {
  arrayProps: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    callories: PropTypes.number
  })),
  categories: PropTypes.string,
};

export default List;
