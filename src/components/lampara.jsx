import { useState } from "react";


export default function Lampara() {

    const [isPrendido, setIsPrendido] = useState(false);

    const handleToggle = () => setIsPrendido(prev => !prev);

  return (
    <div>
        <h1>Lampara: {isPrendido ? "Prendido" : "Apagado"} </h1>
        <button onClick={handleToggle}>{isPrendido ? "Apagar" : "Prender"}</button>
    </div>
  );
}
