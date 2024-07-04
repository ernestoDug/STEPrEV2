import Button from "../../Components/Button/Button";
import List from "../../Components/List/List";


import gamesStyles from "./Games.module.css"

const Games =  ()=> 
    {
        return (
            <>
                <div className={gamesStyles.container}>  



            <h2>Я граюсь</h2>
            <List
            classNamePropsGames = {gamesStyles.itemListGame}
            classNamePropsGamesIMGThumb = {gamesStyles.imgThumb}
            />
            
            <div className={gamesStyles.btnBlock} > 
<Button
 nameBtn="Додати"
 classNameProps={gamesStyles.btnGamesADD}
//  clickProps={}
 idProps={'btnGamesAdd'}
/>

<Button
 nameBtn="Видалити"
 classNameProps={gamesStyles.btnGamesDELL}
//  clickProps={}
 idProps={'btnGamesDelite'}
 />
 </div>
            </div>
            </>
        )
    }

    export default Games;