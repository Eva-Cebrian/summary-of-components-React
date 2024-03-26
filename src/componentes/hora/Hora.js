import React, { useState } from "react";


export default function App(){
  const[hora, setHora] = useState("");
  function obtenerHora(){ setInterval(() => setHora(new Date().toLocaleTimeString()), 1000)}
  return(
    <div className="cluster">
      {hora ? <h1>{hora}</h1> : <h1>TIME</h1>}
      <button onClick={obtenerHora}>Get Time</button>
      <p> Aqui se usa "useState" para que al principio se vea TIME y cuando se pica el boton se vea el reloj</p>
    </div>
  );
}

