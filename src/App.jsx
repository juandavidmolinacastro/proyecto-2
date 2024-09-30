import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './Conversor'



function App() {
  const  [usuario, setUsuario ] = useState('')
  const  [clave, setClave ] = useState('')
  
  const [logueado, setLogueado  ] = useState(false)


  function cambiarUsuario(evento) {
    setUsuario (evento.target.value)
  }
  function cambiarClave(evento) {
    setClave (evento.target.value)

  }
  function ingresar() {
    if (usuario == "admin" && clave == "admin") {
      alert("ingresaste...")
      setLogueado(true)
    }else{
      alert("usuario o clave incorrectos ")
  }
}
if (logueado) {
  return <Conversor />
}
  return ( 
    <>
    <h1>inicio de sesion</h1>
    <input placeholder="usuario" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>
    <input placeholder="password" name="clave" id="clave" value={clave} onChange={cambiarClave}/>
    <button onClick={ingresar}>Ingresar</button>

    </>
  )
}

export default App
