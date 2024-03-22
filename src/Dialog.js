import React, {useState} from "react";


export default function Dialog(){
    const [open, setOpen] = useState(false);

    const openDialog = () => setOpen(true);
    const closeDialog = () => setOpen(false);
    return <>
        <button onClick={openDialog}> Lanzar el dialog</button>

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