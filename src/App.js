import './App.css';
import Dialog from "./Dialog";
import Array from "./componentes/Array";
import ArrayState from './componentes/Arraystate/Arraystate';
import Contador from './componentes/contador/Contador';
import Hora from './componentes/hora/Hora';
import EjemploUseEffect from './componentes/useeffect/Cambiotitulo';
import Ventana from './componentes/ventana/Ventana';
import DiccionarioEmojis from './componentes/Emoji/Diccionarioemojis';
import Page from './componentes/dialogconmodal/Page';
import Titulomenu from './componentes/Titulomenu/Titulomenu';


function App() {
  return (
    <div> 
      <div>
        <Titulomenu />
      </div>
    <div className='parent'>
     
     <Dialog />
     <Array />
     <ArrayState />
     <Contador />
     <Hora />
     <EjemploUseEffect />
     <Ventana />
     <DiccionarioEmojis />
     {/* <Page /> */}
     
     
    </div>
    </div>
  );
}

export default App;
