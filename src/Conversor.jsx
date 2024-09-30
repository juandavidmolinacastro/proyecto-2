import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Conversor() {
 
  const [textoAvoz, setTextoAvoz  ] = useState('')
  const [VozATexto, setVozATexto  ] = useState('')
  

function cambiartexto(evento) {
  setTextoAvoz (evento.target.value)

}
function convertirTextoAvoz() {
  const synth = window.speechSynthesis
      const utterThis = new SpeechSynthesisUtterance(textoAVoz)
      synth.speak(utterThis)
}
      function resultado(event) {
        setVozATexto(event.results[0][0].transcript)
}

  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang= "es-ES"
    recognition.start()
    recognition.onresult= resultado
}

return (
  <>
  <h1>conversor tts y stt</h1>
<br/>
  <h3> conversor de texto a voz </h3>
  <input type="text" id="textoAVoz" value={textoAvoz} onChange={cambiartexto}/>
  <button onClick={convertirTextoAvoz}>Convertir</button> 

  <h3> Conversor de voz a texto</h3>
  <button onClick={grabarVozATexto}>Grabar</button>
  {VozATexto}
      </>
);
}
  


export default Conversor
