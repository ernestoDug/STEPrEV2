// npm create vite@latest myName
// npm run dev

// https://www.youtube.com/watch?v=CgkZ7MvWUAA

//19/06   2 30.0

import { motion } from "framer-motion";
// npm i framer-motion
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// npm i react-toastify
import "normalize.css";
/* npm install normalize.css */
import { lazy } from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// *************************************************
import { open } from "./utils/indexdb.js";
import Loading from "./Components/Loading/Loading.jsx";
// import Footer from "./Components/Footer/Footer";
// import Food from "./Components/Food/Food";
// import Card from "./Components/Card/Card";
// import Button from "./Components/Button/Button";
import ErrorPage from "./Pages/ErrrorPage/ErrorPage.jsx";
import Layout from "./Layout";

// import ButtonCardStyle from "./Components/Button/Button.module.css";

// Щоб відкласти завантаження коду цього компонента до його першого відтворення
//важлливо щоб відкладений компонент, який ви імпортуєте, був експортований як defaultекспорт.
const Home = lazy(() => import("./Pages/Home/Home"));
const Schedule = lazy(() => import("./Pages/Schedule/Schedule"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    open()
      .then(() => {
        setLoading(loading === false);
        // сповіщення
        toast("Wait a little friend");
      })
      .catch(() => {
        alert.error("Error");
      });
    // підключаємось до бд стан лоадинг та вивід лоудера потрібен поки ще база за піделючена бо помилка

    // the side effect will only run when the props or state changed
  }, []);

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
        ) : (
          <>
            <BrowserRouter>
              <Routes>
                <Route>
                  <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />

                    <Route path="schedule" element={<Schedule />} />

                    {/* подстановочный путь */}
                    <Route path="*" element={<ErrorPage />} />
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </>
        )}
      </motion.div>
    </>
  );
};

export default App;
