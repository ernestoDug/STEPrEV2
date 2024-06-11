import { useEffect } from 'react';
import {  useLocation, useNavigate    } from "react-router-dom";
// npm install react-router-dom

import {UlNavigateStyle} from '../Navigation/Navigation.module';
 
const Navigation = () => {
    // Хук useLocation возвращает объект текущего местоположения.
   const location = useLocation();
   const navigate = useNavigate();
//    Хук useNavigate возвращает функцию для программной навигации
// що ми і робимо на кнопках  


    useEffect(() => {
        console.log('Current location ', location);
      }, [location]);
    

    return(
<nav>
<UlNavigateStyle>
    <li>
    <button onClick={() => navigate('home', { replace: false })}>
    Home
</button>
         </li>
   
        {/* у лапках в навигейт пишемо те що у пошук адресі будемо бачити 
        і те що юслокайшин буде в косоль виводити
        */}

</UlNavigateStyle>
</nav>
    )
}

export default Navigation