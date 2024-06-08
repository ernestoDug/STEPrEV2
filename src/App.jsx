// npm create vite@latest myName
// npm run dev

// https://www.youtube.com/watch?v=CgkZ7MvWUAA

// 09/06   1 10.0

import { motion } from "framer-motion";
// npm i framer-motion

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Food from "./Components/Food/Food";
import Card from "./Components/Card/Card";
import Button from "./Components/Button/Button";
import Students from "./Components/Students/Students";
import List  from "./Components/List/List";

function App() {
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
        <Header />

        <Footer />
        <Food />

        <Card>
          <Button />
        </Card>

        <Students name="Hren" age={100} isStudent={true} isLogin = {false}/>

        
        <Students name="Dart Weider" age={666} isStudent={false} isLogin = {true}/>

        <Students isLogin = {true}/>
        {/* props dont pass howeever we are have defoult props  */}

        <List/>

      </motion.div>
    </>
  );
}

export default App;
