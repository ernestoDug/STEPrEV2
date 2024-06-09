// npm create vite@latest myName
// npm run dev


// https://www.youtube.com/watch?v=CgkZ7MvWUAA

// 09/06   1 30.0

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
  ]

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

        <List fruits = {fruits}
        categories = 'fruits'
                />
        {/* тут протсо дав загальну назву пропсу фруйтес fruits =  а не наприклад там айтемс = чи ще що */}

{/* reuse  List with sacondwith others props */}
        <List fruits = {vegatables}
        categories = 'vegatables'
        />

        {/* for demonstration conditional rendering if fruits length = 0  */}
{/* ******************** */}
{/* this component will not be rendered because the fruit props array was not 
passed and we have a condition: if the length is zero then do not render */}
        <List
          categories = 'without props fruits'
        />

      </motion.div>
    </>
  );
}

export default App;
