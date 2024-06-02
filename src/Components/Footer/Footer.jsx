import { P_Style_Footer } from "./Footer.module";

const Footer = () => {
  return (
    <>
      <footer>
        <P_Style_Footer>
          &copy;
          {/* this is C is round  and current year*/}
          {new Date().getFullYear()}
          {}
        </P_Style_Footer>
      </footer>
    </>
  );
};

export default Footer;
