export default function Counter({count, onClick, onClickDecrement}) {
    return (
      <div>
          <p>Count: {count}</p>
          {onClick && (<button onClick={onClick}>Incrementar</button>)}
          
          <br />
          <br />
          {onClickDecrement && (<button onClick={onClickDecrement}>Decrementar</button>)}
          
  
      </div>
    )
  }