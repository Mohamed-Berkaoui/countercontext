import React, { useContext } from 'react'
import { counterContext } from './App'

function Display() {
    const {counter}=useContext(counterContext)
  return (
    <div>
        
        <h1>{counter}</h1>
    </div>
  )
}

export default Display