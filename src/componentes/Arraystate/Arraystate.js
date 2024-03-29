import { useState } from "react";
import './Arraystate.css';

export default function ArrayState(){
    const [data,setData] = useState([1,2,3])
    
    // esta funcion añade un elemento al array data cada vez que se ejecuta
    function handlerClick(){
        data.push(data.length+1)
        setData([...data])
    }

    return(
        <>
            <div className="cluster"> 
            
            <p>Uso useState para añadir elementos a un array</p>
            <section> 
                <button onClick={handlerClick}>Add</button>
               <ul>  {data.map(v=> <li key={v}> {v} </li>)} </ul>
            </section>
            </div>
        </>
    )
}