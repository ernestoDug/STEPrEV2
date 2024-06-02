import  MyPhotoCabbage from "../../assets/imgs/cabbage.jpg";
import {DivCardStyle} from './Card.module';


const Card = () => {
  return (
    <>
      <DivCardStyle>
        <img src={MyPhotoCabbage} alt="photo cabbage" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ratione
          necessitatibus quidem unde est fugit cupiditate ipsam nihil incidunt
          ullam.
        </p>
        <h2> super cabbage</h2>
      </DivCardStyle>
    </>
  );
};

export default Card;
