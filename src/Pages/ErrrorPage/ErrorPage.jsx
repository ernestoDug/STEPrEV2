import MyErrorPicture from "../../assets/imgs/errorIMG.jpg";
import erroStyles from "./ErrorPage.module.css";

function ErrorPage() {
    // const error = useRouteError();
    // console.error(error);
  
    return (
      
      <div className= {erroStyles.container} id="error-page" >
        <h1>Прикро, але сторінка загубилася</h1>
        
      <img src={MyErrorPicture} alt="sad bear on a swing" />
      </div>
    );
  }
  
  export default ErrorPage;