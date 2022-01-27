import "./styles.css";
import Frigo from "./components/Frigo";
import FrigoForm from "./components/FrigoForm";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h2>Salut Pierre-Louis bienvenue dans ton frigo !</h2>
      <Frigo></Frigo>
    </div>
  );
}
