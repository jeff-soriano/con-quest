import { React, useState } from 'react'
import Button from '@mui/material/Button'

import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div>
      <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <Button onClick={() => setIsNavOpen(true)}>Navigation</Button>
      <Outlet />
    </div>
  )
}

export default Home
