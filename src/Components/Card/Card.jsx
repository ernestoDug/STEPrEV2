import MyPhotoCabbage from "../../assets/imgs/cabbage.jpg";
import { CardImgWrappStyle, DivCardStyle, ImgStyle } from "./Card.module";
import PropTypes from "prop-types";

// import { Outlet } from 'react-router-dom';
// npm i react-router-dom

const Card = ({children}) => {
  return (
    <>
      <DivCardStyle>
        <CardImgWrappStyle>
          <ImgStyle src={MyPhotoCabbage} alt="photo cabbage" />
        </CardImgWrappStyle>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ratione
          necessitatibus quidem unde est fugit cupiditate ipsam nihil incidunt
          ullam.
        </p>
        <h2> super cabbage</h2>
        {children}

        {/* <Outlet /> */}
      </DivCardStyle>
    </>
  );
};

Card.propTypes = {
children:  PropTypes.node,
};

export default Card;



