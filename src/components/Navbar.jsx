import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Link from '@mui/material/Link'
import { NavLink } from 'react-router-dom'

const NAV_LINKS = {
  Home: 'character',
  'QR Scanner': 'qr-scanner',
  Quests: 'quests',
}

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <div>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <List>
          {Object.entries(NAV_LINKS).map(([key, value]) => (
            <ListItem key={key} disablePadding>
              <ListItemButton>
                <ListItemText>
                  <Link component={NavLink} to={value} underline="none">
                    {key}
                  </Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}
