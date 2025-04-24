import { useId } from "react"


export default function TimeIpnut({label, value, handleOnCHange}) {

    const id = useId(); //genera un id para cada componente

    return (
        <div>
            <label htmlFor={id}>{label}:</label>
            <input type="number" id={id} min={0} value={value} onChange={handleOnCHange}/>
        </div>
    )
}
