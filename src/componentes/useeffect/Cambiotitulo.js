import React, { useState, useEffect } from 'react';

function EjemploUseEffect() {
  const [contador, setContador] = useState(0);

     
        useEffect(() => {
            document.title = "Has hecho click " + contador + " veces.";
        });

  return (
    <div className='cluster'>
      <p>Has hecho clic {contador} veces</p>
      
      <button onClick={() => setContador(contador + 1)}>
        Hazme clic
      </button>
      <p> "useEffect" para cambiar el titulo de la pagina</p>
    </div>
  );
}

export default EjemploUseEffect;
