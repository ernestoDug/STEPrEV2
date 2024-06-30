import PropTypes from "prop-types";

import Button from "../Button/Button"
import delitetStyle from "./DeliterStyle.module.css";
import { deleteItem } from "../../utils/indexdb";

const Deliter = ({idPropsFromDbForDelite}) => {
// видаялємл з бази 
const hadeleDelite = () => {
// console.log(idPropsFromDbForDelite, 88);
deleteItem(idPropsFromDbForDelite);}

    return (

        <>
              <Button
         nameBtn = {"🗑️"}
         clickProps = {hadeleDelite}
         classNameProps = {delitetStyle.btn}
        //  dbPropsFromCount
         idProps ={ "btnDeliter"}
                  />
   
        </>
    )
}

Deliter.propTypes = {
    idPropsFromDbForDelite: PropTypes.string,
  };

export default Deliter