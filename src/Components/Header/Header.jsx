import headerStyle from "./Header.module.css";

import Navigation from "../Navigation/Navigation";

const Header = () => (
  <>
    <div className={headerStyle.h1WrapHeder}>
      <span className={headerStyle.spanHeder}>💚</span>
      <h1 className={headerStyle.h1Style}>Тут я зростаю</h1>
    </div>
    <Navigation />
  </>
);

export default Header;
