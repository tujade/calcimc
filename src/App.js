import React from "react";
import './app.css'


export default function App() {
  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="input-area">
        <input type="text" placeholder="Peso (kg)"></input>
        <input type="text" placeholder="Altura (cm)"></input>
        <button className="raise">Calcular</button>
      </div>
      <div>
        <h2>Seu IMC foi 25, você está abaixo do peso</h2>
      </div>
    </div>
  )
}
