import { useState } from "react"

export default function Envio() {

    const [estadoPaquete, setEstadoPaquete] = useState("...");

  return (
        <div>
            <hi>Estado de Paquete: {estadoPaquete}</hi><br></br>
            <button onClick={() => (setEstadoPaquete("Proceso de Pago"))}>Proceso de Pago</button>
            <button onClick={() => (setEstadoPaquete("Pagado"))}>Pagado</button>
            <button onClick={() => (setEstadoPaquete("Procesando Envio"))}>Procesando Envio</button>
            <button onClick={() => (setEstadoPaquete("En camino"))}>En camino</button>
            <button onClick={() => (setEstadoPaquete("Entregado"))}>Entregado</button>
        </div>
  )
}
