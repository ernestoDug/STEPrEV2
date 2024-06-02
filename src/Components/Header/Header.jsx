import { H_1_Style } from "./Header.module";

const Header = () => {
  return (
    <>
      <header>
        <H_1_Style>this is new day </H_1_Style>
        <nav>
          <ul>
            <li>
              <a href="#"> home</a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">servises</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
          <hr />
        </nav>
      </header>
    </>
  );
};

export default Header;
