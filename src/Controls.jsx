import React, { useContext } from 'react'
import { counterContext } from './App'

function Controls() {
    const context=useContext(counterContext)
  return (
    <div>

<button onClick={()=>context.setCounter(context.counter+1)}>+</button>
<button onClick={()=>context.setCounter(context.counter-1)}>-</button>
    </div>
  )
}

export default Controls