import { React, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button'

const QUESTIONS = [
  {
    text: 'Did you enjoy the event?',
  },
  {
    text: 'Would you come back next year?',
  },
  {
    text: 'Would you recommend this event to your friends?',
  },
]

const Survey = () => {
  const [setExp] = useOutletContext()

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const onButtonClick = () => {
    setExp((xp) => (xp < 100 ? xp + 10 : xp))
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const questions = () => (
    <div>
      <h2>{QUESTIONS[currentQuestionIndex].text}</h2>
      <Button
        color="success"
        style={{ marginTop: '20px' }}
        onClick={onButtonClick}
        variant="contained"
      >
        Yes!
      </Button>
      <Button
        color="error"
        style={{ marginTop: '20px', marginLeft: '10px' }}
        onClick={onButtonClick}
        variant="contained"
      >
        No!
      </Button>
    </div>
  )

  const surveyFinished = () => (
    <div>
      <h2>Thank you! You've completed your quest!</h2>
      <Link to=".." relative="path">
        Return to quests page
      </Link>
    </div>
  )

  return (
    <div style={{ textAlign: 'center' }}>
      {currentQuestionIndex < QUESTIONS.length ? questions() : surveyFinished()}
    </div>
  )
}

export default Survey
