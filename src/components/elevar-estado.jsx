import { useState } from "react";



export default function ElevarEStado() {


    const nombres = ["Juan", "Jose", "Maria", "Jazmin", "Carlos"];

    const [selectedIndex, setSelectedIndex] = useState(-1); 

    const handleSelected = (i) => {setSelectedIndex(i)}

  return (
    <>
    <ul>
        {nombres.map((nombre, i) => (
            <ListItem 
            nombre={nombre} 
            key={nombre} 
            isAct = {i === selectedIndex}
            i = {i}
            onClick={handleSelected}
            />))}
    </ul>    
    </>
  )
}


const ListItem = ({nombre, isAct, i, onClick}) => {

    return (
    <li>
        {nombre} {isAct && " | ACT "}<button onClick={() => onClick(i)}>Activar</button>
    </li>
    )
};
