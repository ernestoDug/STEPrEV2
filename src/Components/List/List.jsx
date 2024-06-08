// import { nanoid } from "nanoid";
const List = () => {
  const fruits = [
   {type: "aple", cLLORIES: 6  }, 
   {type: "banane", cLLORIES: 50}, 
  {type: "tomato", cLLORIES: 88}, 
  {type: "peach", cLLORIES: 100}];

  const fruitItems = fruits.map((fruit) => <li>{fruit.type}</li>);
  return (
    <>
      <ol>{fruitItems}</ol>
    </>
  );
};

export default List;
