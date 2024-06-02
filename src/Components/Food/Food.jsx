import { Ul_Style_Food } from "./Food.module";

const Food = () => {
  const food1 = "Orange";
  const food2 = "Banana";

  return (
    <>
      <footer>
        <Ul_Style_Food>
          <li>Apple</li>
          <li>{food1.toLocaleUpperCase()}</li>
          <li>{food2}</li>
        </Ul_Style_Food>
      </footer>
    </>
  );
};

export default Food;
