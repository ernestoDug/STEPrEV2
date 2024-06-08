import PropTypes from "prop-types";

import StudentsParNameStyle from "./Students.module.css";
// names  import and ad for name className bla-bla.nameClasses from css
// pay attention on name file module.css

const Students = ({ name, age, isStudent }) => {
  return (
        <>
      <div>
        <p className={StudentsParNameStyle.name}>name: {name}</p>
        <p className={StudentsParNameStyle.age}>age: {age}</p>
       
        {isStudent ? (

       <p className={StudentsParNameStyle.isStudTrue}>
 Student
       </p>
                ) : (
        
        <p className={StudentsParNameStyle.isStudFalse}>
            Not student
   </p>    
)}
</div>
</>
);
};


export default Students;

Students.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool,
};
