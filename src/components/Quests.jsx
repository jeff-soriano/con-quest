import { React } from 'react'
import { useOutletContext } from 'react-router-dom'

import Button from '@mui/material/Button'

const Quests = () => {
  const [setExp] = useOutletContext()

  const addExp = () => setExp((xp) => (xp < 100 ? xp + 5 : xp))

  return (
    <div>
      <h1>Quests page!</h1>
      <Button onClick={addExp} variant="contained">
        Add experience
      </Button>
    </div>
  )
}

export default Quests
