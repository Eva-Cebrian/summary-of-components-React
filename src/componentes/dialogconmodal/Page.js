import Dialog from "./Dialog"
import { useDialog } from "./useDialog";

export default function Page(){

    
    const open = useDialog();
    
    function confirmDialog(){
        console.log("Confirmado")
    }
    return ( 
    
        <div className="cluster">
            <Dialog confirm={confirmDialog} open={open}>
                <p>Hola soy un parrafo</p>
            </Dialog>
            <button onClick={open}>Abrir dialog</button>
            <p>Resolucion de dialog con showModal(), usando clousures</p>
        </div>
    
    );
    

}