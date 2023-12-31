import { React, useState } from 'react'

import { Outlet } from 'react-router-dom'

import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import PersonIcon from '@mui/icons-material/Person'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'

import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'

import { useNavigate } from 'react-router-dom'

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

const NAV_LINKS = {
  Character: { route: 'character', icon: <PersonIcon /> },
  'QR Scanner': { route: 'qr-scanner', icon: <CameraAltIcon /> },
  Quests: { route: 'quests', icon: <QuestionAnswerIcon /> },
}

const Home = () => {
  const [currentBottomNav, setCurrentBottomNav] = useState(0)
  const [exp, setExp] = useState(25)
  const navigate = useNavigate()

  return (
    <div>
      <div
        style={{
          backgroundColor: '#36454F',
          paddingBottom: '1rem',
          boxShadow: '0px 2px 2px gray',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: '0', marginTop: '0', color: 'white' }}>
            Jefficus
          </h1>
          <h2 style={{ marginTop: '0', color: 'white' }}>Level 1</h2>
          <BorderLinearProgress
            sx={{ marginLeft: '1rem', marginRight: '1rem' }}
            variant="determinate"
            value={exp}
          />
        </div>
      </div>
      <Outlet context={[setExp]} />
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={currentBottomNav}
          onChange={(_, newValue) => {
            setCurrentBottomNav(newValue)
            navigate(Object.entries(NAV_LINKS)[newValue][1].route)
          }}
        >
          {Object.entries(NAV_LINKS).map(([key, value]) => (
            <BottomNavigationAction key={key} label={key} icon={value.icon} />
          ))}
        </BottomNavigation>
      </Paper>
    </div>
  )
}

export default Home
