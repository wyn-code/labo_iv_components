
import Lampara from "./components/lampara";
import Agua from "./components/agua";
import Envio from "./components/envio";
import Temperature from "./components/temperature";
import Contador from "./components/contadores.component/contador";

function App() {
  return (
  <>
    <Agua/>
    <hr/>
    <Lampara/>
    <hr/>
    <Envio/>
    <hr />
    <Temperature/>
    <hr/>
    <Contador/>
  </>
  )
}

export default App
