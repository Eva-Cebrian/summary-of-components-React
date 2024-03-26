import React, {useState} from "react";
import './Dialog.css';

export default function Dialog(){
    const [open, setOpen] = useState(false);

    const openDialog = () => setOpen(true);
    const closeDialog = () => setOpen(false);
    return <>
        <div className="cluster"> 
        <button onClick={openDialog}> Lanzar el dialog sin showModal</button>
        <p> Aqui se usa el "useState" para visualizar o no una parte de DOM</p>
        </div>

        { open && 
            (<dialog open>
                <p>Mensaje del dialog</p>
                <menu>
                    <button onClick={closeDialog} type="reset">Cancelar</button>
                    <button onClick={closeDialog} type="submit">Confirmar</button>
                </menu>
            </dialog>)}
    </>
}