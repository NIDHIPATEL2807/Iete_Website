import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './Routes/AppRoutes'

function App() {


  return (
    <>
        <div className="font-sans">
            <AppRoutes />
        </div>
    </>
  )
}

export default App
