import { React } from 'react'
import { useOutletContext } from 'react-router-dom'

import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import FolderIcon from '@mui/icons-material/Folder'
import Avatar from '@mui/material/Avatar'

const Quests = () => {
  const [setExp] = useOutletContext()

  const addExp = () => setExp((xp) => (xp < 100 ? xp + 5 : xp))

  return (
    <div style={{ textAlign: 'center' }}>
      <List disablePadding>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Survey on your last visit"
              secondary="Complete this survey for more exp!"
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Button
        onClick={addExp}
        variant="contained"
        style={{ marginTop: '20px' }}
      >
        Add experience
      </Button>
    </div>
  )
}

export default Quests
