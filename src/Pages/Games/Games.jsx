import Button from "../../Components/Button/Button";
import List from "../../Components/List/List";
import { useState, } from "react";

import gamesStyles from "./Games.module.css";
// import { nanoid } from "nanoid";



const Games =  ()=> 
    {

        const [games, setGames] = useState([]);


        const changerGamesAdd = ()=> {

            const newBricks = {
                bricks: 2,
            }
            setGames(prevState =>  [...prevState, newBricks]);
            // console.log(games);
        }

        const changerGamesDel = (index)=> {

            // _  елемент іноруємо щоб не писати зайве 
                setGames(prevState =>  prevState.filter((_, i) => i !== index));
            console.log(index, "dell99");

        }

        return (
            <>
                <div className={gamesStyles.container}>  

            <h2>Я будівельник</h2>
<ul    className = {gamesStyles.listGame}>
{games.map((game, index) => 
                <List
            key = {index}
            classNamePropsGames = {gamesStyles.itemListGame}
            classNamePropsGamesIMGThumb = {gamesStyles.imgThumb}
            onClickProps = {changerGamesDel}

                    />
) }
</ul>

          
            
            <div className={gamesStyles.btnBlock} > 
<Button
 nameBtn="Цеглини"
 classNameProps={gamesStyles.btnGamesADD}
 clickProps={changerGamesAdd}
 idProps={'btnGamesAdd'}
/>


 </div>
            </div>
            </>
        )
    }

    export default Games;