import { React, useState } from 'react'

import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Grid from '@mui/material/Grid'

import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#50C878',
  },
}))

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div>
      <div
        style={{
          backgroundColor: '#36454F',
          paddingBottom: '1rem',
          boxShadow: '0px 2px 2px gray',
        }}
      >
        <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: '0', marginTop: '0', color: 'white' }}>
            Jefficus
          </h1>
          <h2 style={{ marginTop: '0', color: 'white' }}>Level 1</h2>
          <BorderLinearProgress
            style={{ marginLeft: '1rem', marginRight: '1rem' }}
            variant="determinate"
            value={50}
          />
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Home
