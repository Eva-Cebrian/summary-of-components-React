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
            <button onClick={handlerClick}>Add</button>
            <p>Uso useState para añadir elementos</p>
            {data.map(v=> <li key={v}> {v} </li>)}
            </div>
        </>
    )
}