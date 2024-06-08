// npm create vite@latest myName
// npm run dev

// https://www.youtube.com/watch?v=CgkZ7MvWUAA

// 08/06   45.0
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Food from "./Components/Food/Food";
import Card from "./Components/Card/Card";
import Button from "./Components/Button/Button";
import Students from "./Components/Students/Students";

function App() {
  return (
    <>
      <Header />

      <Footer />
      <Food />

      <Card>
      <Button />
      </Card>

      <Students 
      name="Hren" 
      age={100} 
      isStudent = {true}
      />

<Students 
      name="Dart Weider" 
      age={666} 
      isStudent = {false}
            />


    </>
  );
}

export default App;
