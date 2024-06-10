// npm create vite@latest myName
// npm run dev

// https://www.youtube.com/watch?v=CgkZ7MvWUAA

//10/06   2 00.0

import { motion } from "framer-motion";
// npm i framer-motion
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// npm i react-toastify

import { useState, useEffect } from "react";


import { open } from "./utils/indexdb.js";
import Loading from "./Components/Loading/Loading.jsx";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Food from "./Components/Food/Food";
import Card from "./Components/Card/Card";
import Button from "./Components/Button/Button";
import Students from "./Components/Students/Students";
import List from "./Components/List/List";
import Form from "./Components/Form/Form";


import ButtonCardStyle from "./Components/Button/Button.module.css";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    open()
      .then(() => {
        setLoading(loading === false);
        // сповіщення
        toast("ЧЕКАЙТЕ ЗАВАНТАЖУЄМО");
      })
      .catch(() => {
        console.error("Помилка");
      });
    // підключаємось до бд стан лоадинг та вивід лоудера потрібен поки ще база за піделючена бо помилка

    // the side effect will only run when the props or state changed
  }, []);




  // const for props for List
  const fruits = [
    { type: "aple", callories: 6 },
    { type: "banane", callories: 50 },
    { type: "tomato", callories: 88 },
    { type: "peach", callories: 100 },

    // for demonstration sort on  forein language
    //  { type: "яблоко", callories: 6 },
    // { type: "банан", callories: 50 },
    // { type: "помидор", callories: 88 },
    // { type: "персик", callories: 100 },
  ];

  const vegatables = [
    { type: "carrot", callories: 63 },
    { type: "cucumber", callories: 500 },
    { type: "brokkoly", callories: 88 },
  ];

  // handler  for cards button ***************************1
  const showerDouble = (e) => {
    // replacing text on a button
    e.target.textContent = "Nyams";
    // change css +++++++++++++++++++++++++++++++++++++++++++
    e.target.style.color = "white";
  };

  const showerMono = (e) => {
    e.target.style.color = "red";
    e.target.textContent = "click for eat";

    console.log("mono666");
  };
  // *****************************************************

  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
         {/* контейнтер для сповіщень */}
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

{loading ? (
        <>
       
          <Loading />
        </>
      ) : (<>
        <Header />

        <Footer />
        <Food />

        <Card>
          <Button
            nameBtn="click for eat"
            clickProps={showerMono}
            doubleClickProps={showerDouble}
            classNameProps={ButtonCardStyle.buttonCards}
          />
        </Card>

        <Students name="Hren" age={100} isStudent={true} isLogin={false} />

        <Students
          name="Dart Weider"
          age={666}
          isStudent={false}
          isLogin={true}
        />

        <Students isLogin={true} />
        {/* props dont pass howeever we are have defoult props  */}

        <List fruits={fruits} categories="fruits" />
        {/* тут протсо дав загальну назву пропсу фруйтес fruits =  а не наприклад там айтемс = чи ще що */}

        {/* reuse  List with sacondwith others props */}
        <List fruits={vegatables} categories="vegatables" />

        {/* for demonstration conditional rendering if fruits length = 0  */}
        {/* ******************** */}
        {/* this component will not be rendered because the fruit props array was not 
passed and we have a condition: if the length is zero then do not render */}
        <List categories="without props fruits" />
<Form/>
</>)}

      </motion.div>
    </>
  );
}

export default App;
