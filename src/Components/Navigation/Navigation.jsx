import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// npm install react-router-dom

import Button from "../Button/Button";

import NavStyle from "./Navigation.module.css";

const Navigation = () => {
  // Хук useLocation возвращает объект текущего местоположения.
  const location = useLocation();
  const navigate = useNavigate();
  //    Хук useNavigate возвращает функцию для программной навигации
  // що ми і робимо на кнопках

  useEffect(() => {
    console.log("Current location ", location);
  }, [location]);

  return (
    <nav>
      <ul className={NavStyle.ulNavigateStyle}>
        <li>
          <Button
            nameBtn="Мої плани"
            classNameProps={NavStyle.btnNavStyle}
            clickProps={() => navigate("home", { replace: false })}
            idProps={'btnMyPlane'}
          />

          <Button
            nameBtn="Мій розклад"
            classNameProps={NavStyle.btnNavStyle}
            clickProps={() => navigate("schedule", { replace: false })}
            idProps={'btnMySchedule'}

          />

          {/* <Button
            nameBtn="Home"
            classNameProps={NavStyle.btnNavStyle}
            clickProps={() => navigate("home", { replace: false })}
          /> */}
        </li>

        {/* у лапках в навигейт пишемо те що у пошук адресі будемо бачити 
        і те що юслокайшин буде в косоль виводити
        */}
      </ul>
    </nav>
  );
};

export default Navigation;
