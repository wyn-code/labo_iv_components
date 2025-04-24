import { useEffect, useState } from "react"
import Counter from "./counter";
import '@justinribeiro/lite-youtube';

const localStorageCount = JSON.parse(localStorage.getItem("count"));

export default function Contador() {

    const [count, setCount] = useState(localStorageCount ?? 0); // ?? es un OR que solo funciona para null o undifened
    const [visible, setVisible] = useState(true);

    
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
},[count]);

  
  return (
    <>
      <h1>CONTADORES: </h1>
      <button onClick={() => setVisible(!visible)}>Cambiar visibilidad</button>
      {visible && (<Counter 
        count={count} 
        onClick={() => setCount(count + 1)}
        onClickDecrement={() => setCount(count - 1)}
        />)}
      <br />
      <br />
      <lite-youtube videoid="guJLfqTFfIw"></lite-youtube>
    </>
  )
}


// {visible ? (<Counter count={count} onClick={() => setCount(count + 1)}/>) : null} el jsx dentro se escribe entre ()
