import MyErrorPicture from "../../assets/imgs/errorIMG.jpg";

function ErrorPage() {
    // const error = useRouteError();
    // console.error(error);
  
    return (
      <div id="error-page" >
        <h1>Прикро, але сторінка загубилася</h1>
        
      <img src={MyErrorPicture} alt="sad bear on a swing" />
      </div>
    );
  }
  
  export default ErrorPage;