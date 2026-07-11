import React from 'react'
//import { useLocalStorage } from '../TodoContext'
import { AppUI } from './AppUI.jsx'
import './app.css'
import { TodoProvider } from '../TodoContext/index.jsx'

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App




