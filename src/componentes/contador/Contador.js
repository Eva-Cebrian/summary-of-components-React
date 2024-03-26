import './contador.css';
import { useState } from "react";

export default function Contador(){
    const[numero, setNumero] = useState(0);

   
    const sumar = () => setNumero(numero+1);
    const restar = () => setNumero(numero-1);
    

    return (
        <div className='cluster centrar'> 
        <h1>CONTADOR = {numero}</h1>
               
                <h3>
                <button onClick={sumar}> Sumar +  </button>
                <button onClick={restar}> Restar - </button>
                </h3>
                <p> "useState" para ir modificando el contador</p>

        </div>
    )
}