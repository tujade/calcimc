import { useState } from 'react'
import './app.css'

export default function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  const [mensagem, setMensagem] = useState('')

  function calcularIMC() {
    const alt = altura / 100
    const imc = peso / (alt * alt)

    if (imc < 18.6) {
      setMensagem(
        'Você está abaixo do peso! Vamos verificar o que pode estar acontecendo? Seu IMC: ' +
          imc.toFixed(2)
      )
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem(
        'Você está no peso ideal! Parabéns, continue assim! Seu IMC: ' +
          imc.toFixed(2)
      )
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem(
        'Você está levemente acima do peso! Vamos dar uma melhorada nisso!? Seu IMC: ' +
          imc.toFixed(2)
      )
    } else if (imc >= 34.9) {
      setMensagem(
        'Cuidado, você está no grau de obesidade! Consulte o seu médico e bora mexer esse esqueleto Seu IMC: ' +
          imc.toFixed(2)
      )
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="input-area">
        <input
          type="text"
          placeholder="Peso (kg)"
          value={peso}
          onChange={e => setPeso(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Altura (cm)"
          value={altura}
          onChange={e => setAltura(e.target.value)}
        ></input>
        <button onClick={calcularIMC} className="raise">
          Calcular
        </button>
      </div>
      <div>
        <h2>{mensagem}</h2>
      </div>
    </div>
  )
}
