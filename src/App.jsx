import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  console.log(`${import.meta.env.VITE_XAVIER_VAR}`)

  return (
    <>
    <h1>Xavier Rice: this is my secret-{import.meta.env.VITE_XAVIER_VAR}</h1>
   
    </>
  )
}

export default App
