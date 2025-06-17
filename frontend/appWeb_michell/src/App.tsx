import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//Correr npm run dev
function App() {
  const [count, setCount] = useState(5)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>--Vite + React --</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>

         <form className="form">
          <div>
            <label>Nombre:</label><br />
            <input
              type="text"
              
              required
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Correo:</label><br />
            <input
              type="email"
             
              required
            />
          </div>
          <button type="submit" style={{ marginTop: '15px' }}>Enviar</button>
        </form>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Alina SOlis
      </p>
    </>
  )
}

export default App
