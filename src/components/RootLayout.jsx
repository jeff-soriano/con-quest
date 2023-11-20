import { React, useState } from 'react'

import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsNavOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <Outlet />
    </div>
  )
}

export default Home
