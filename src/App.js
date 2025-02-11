import "./App.css";
import { Routes, Route } from "react-router-dom";
import Secmenu from "./components/Secmenu";
import Navbar from "./components/Navbar";
import Content from "./components/Content"

function App() {
  return (
    <div className="relative w-full h-screen">
      <img
        src="/images/Background.png"
        alt="img"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      
      <div className="absolute top-0 left-0 w-full ">
        <Secmenu />
        <Navbar />
        <Content />

        
      </div>
    </div>
  );
}

export default App;
