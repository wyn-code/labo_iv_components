import { useState } from "react";


export default function Agua() {

    const [estado, setEstado] = useState("...");

    
  return (
    <div>
        <h1>Estado: {estado}</h1>
        <button onClick={() => setEstado("💧")}>Liquido</button>
        <button onClick={() => setEstado("🧱")}>Solido</button>
        <button onClick={() => setEstado("⛽")}>Gaseoso</button>
        <button onClick={() => setEstado("☢")}>Plasma</button>
    </div>
  );
}
