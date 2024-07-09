import Button from "../../Components/Button/Button";
import List from "../../Components/List/List";
import { useState } from "react";

import MyBriksPicture from "../../assets/imgs/bricks.jpg";
import MyWindowsPicture from "../../assets/imgs/windows.jpg";



import gamesStyles from "./Games.module.css";
import { nanoid } from "nanoid";

const Games = () => {
  const [games, setGames] = useState([]);

  const changerGamesAdd = () => {
    const newBricks = {
      frame: 2,
    };
    setGames((prevState) => [...prevState, newBricks]);
    // console.log(games);
  };

 
  const changerGamesDel = (index) => {
    // _  елемент іноруємо щоб не писати зайве
    setGames((prevState) => prevState.filter((_, ind) => ind !== index));
    // console.log(index, "dell99");
  };

  return (
    <>
      <div className={gamesStyles.container}>
        <h2>Я будівельник</h2>
        <ul className={gamesStyles.listGame}>
          {games.map((_, index) => (
            <List
              key={nanoid()}
              id={index}
              classNamePropsGames={gamesStyles.itemListGame}
              classNamePropsIMGThumb={gamesStyles.imgThumb}
              onClickProps={changerGamesDel}
              imgProps = { MyBriksPicture }
              imgProps2 = { MyWindowsPicture }
            />
          ))}
        </ul>

        <div className={gamesStyles.btnBlock}>
          <Button
            nameBtn="Шмяк"
            classNameProps={gamesStyles.btnGamesADD}
            clickProps={changerGamesAdd}
            idProps={"btnGamesAdd"}
          />
        
        </div>
      </div>
    </>
  );
};

export default Games;
