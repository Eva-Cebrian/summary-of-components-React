import React, { useState, useEffect } from 'react';

export default function EjemploResize() {
  const [tamanoVentana, setTamanoVentana] = useState(window.innerWidth);

  useEffect(() => {
    const manejarCambioDeTamano = () => {
      setTamanoVentana(window.innerWidth);
    };

    // Suscribirse al evento resize
    window.addEventListener('resize', manejarCambioDeTamano);

    // Función de limpieza que se ejecuta al desmontar el componente
    return () => {
      window.removeEventListener('resize', manejarCambioDeTamano);
    };
  }, []); // El array vacío indica que el efecto no depende de ninguna propiedad o estado, por lo que se ejecuta solo al montar y desmontar el componente

  return (
    <div className='cluster'>
      <p>El tamaño de la ventana es: {tamanoVentana}px</p>
      <p>Aquí se usa "useEffect" para que al modificar el tamaño de la ventana se actualice el dato dentro del parrafo. Como es una modificacion del dom tiene que pasar por useEffect</p>
    </div>
  );
}



