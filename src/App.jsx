import React from 'react'
import Navbar from './components/navbar.jsx'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  let OwnerPath = useLocation().pathname.includes('owner');
  return (
    <div>
      {!OwnerPath && <Navbar></Navbar>}
      <Outlet></Outlet>
    </div>
  )
}

export default App