import { useState } from "react";
import TimeIpnut from "./time-input";


export default function Timeconverter() {

    const [horas, setHours] = useState(0);
    const [minutos, setMinutes] = useState(0);
    
    /*
    const [time, setTime] = useState({
      hora: 0,
      minutos: 0
    });

    const handleTimeChange = (e) => {
      const {name, value} = e.target;
      if( name == TIMES.HORA) {
        setTime({
          hora: value,
          minutos: value * 60
        });
      }
      if(name == TIMES.MINUTES) {
        setTime({
          hora: value,
          minutos: value / 60
        })
      }
    }
      */

  
    const handleHours = (e) => {
        const value = e.target.value;
        setHours(value);
        setMinutes(value*60)
    }

    const handleMinutes = (e) => {
        const value = e.target.value;
        setMinutes(value);
        setHours(value / 60)
    }

  return (
    <>
      <h1>Time Converter</h1>

    <TimeIpnut
      label = "horas"
      value = {horas}
      onChange = {handleHours}
    />

    <TimeIpnut
      label = "minutos"
      value = {minutos}
      onChange = {handleMinutes}
    />
    </>
  );
}


const TIMES = Object.freeze({
  MINUTOS: "minutos",
  HORAS: "horas",
});

/*
<div>
<label htmlFor="hora">Hora: </label>
<input 
    type="number" 
    name={TIMES.HORAS}
    id="hora" 
    min={0}
    value={time.hora}
    onChange={handleTimeChange}
    />
</div>
<div>
<label label htmlFor="minutos">Minutos: </label>
<input 
type="number" 
name={TIMES.MINUTOS} 
id="minutos" 
min={0}
value={time.minutos}
onChange={handleTimeChange}
/>
</div>

*/