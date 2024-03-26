import './Array.css'

export default function Array(){
    const arrayEjemplo = [1,3,5,7,9];

    return (
       <div className="cluster"> 
            <p>Ejemplo de array pasado a lista: </p>
            <ul>
                {arrayEjemplo.map( v => <li key={v}> {v} </li>)}
            </ul>
        
        </div>);
}