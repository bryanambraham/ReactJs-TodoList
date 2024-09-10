import React, { useState } from 'react'

export default function TodoInput(props) {
  const{handleAddTodos, todoValue, settodoValue} = props

  return (
    <header>
        <input value={todoValue} onChange={(e) => {
            settodoValue(e.target.value)
        }} placeholder="Enter What to do..." />
        <button onClick={() => {
          handleAddTodos(todoValue)
          settodoValue('')
        }}>Add</button>
    </header>
   
  )
}
