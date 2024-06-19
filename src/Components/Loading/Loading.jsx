// import { ToastContainer } from 'react-toastify';
// npm i react-toastify
// import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import MyPreloader from "../../assets/imgs/MyPreloader.gif";

import LoadingStyle from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={LoadingStyle.wrapGifLoading}>
      <img src={MyPreloader} alt="skaiter" />
    </div>
  );
};

export default Loading;
