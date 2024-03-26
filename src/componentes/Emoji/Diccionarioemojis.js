import './card.css';
import Card from './Card';
import emojipedia from './emojipedia';

export default function DiccionarioEmojis(){
    return(
        <div className='cluster'> 
            <h1>Diccionario de Emojis</h1>
                <p>Uso de "props"</p>
            <dl className='dictionary'>
                
                {emojipedia.map( (v) =>
                <Card 
                    emoji = {v.emoji}
                    name = {v.name}
                    meaning = {v.meaning}
                />)}
        
            </dl>
        </div>
    )
}

