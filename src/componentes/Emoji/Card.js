import './card.css';
export default function Card(props){
    return(
        <div className='term'>
            <dt>
                <span className='emoji'> {props.emoji} </span>
                <span> {props.name} </span>
            </dt>
            <dd> <span> {props.meaning} </span></dd>
        </div>
    )
}