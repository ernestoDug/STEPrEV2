import PropTypes from "prop-types";

import StudentsParNameStyle from "./Students.module.css";
// names  import and ad for name className bla-bla.nameClasses from css
// pay attention on name file module.css

const Students = ({
  name = "Guest",
  age = 0,
  isStudent = false,
  isLogin = false,
}) => {
  // example const for use in  render dom nodes
  const logIned = <h1 className={StudentsParNameStyle.Logined}>You Logined</h1>
const logIn = <h1 className={StudentsParNameStyle.Login}>Please Login</h1>
  return (
    <>
        <div className={StudentsParNameStyle.wrapStud}>
          <p className={StudentsParNameStyle.name}>name: {name}</p>
          <p className={StudentsParNameStyle.age}>age: {age}</p>
    {/* conditional render */}
          {isStudent ? (
            <p className={StudentsParNameStyle.isStudTrue}>Student</p>
          ) : (
            <p className={StudentsParNameStyle.isStudFalse}>Not student</p>
          )}
          {/* conditional render wsth const */}
          {isLogin ? (  logIned
      ) : (
        logIn
      )}
        </div>

    </>
  );
};

Students.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
  isLogin: PropTypes.bool,
};

export default Students;
