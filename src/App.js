import React, { createContext, useState } from 'react'
import Display from './Display'
import Controls from './Controls'
export const  counterContext=createContext()
function App() { 
  const [counter,setCounter]=useState(1)
  return (
    <div>
<counterContext.Provider value={{counter,setCounter}}>
<Display/>
<Controls/>
</counterContext.Provider>

    </div>
  )
}

export default App