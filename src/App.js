import { React } from 'react'

import QrScannerPage from './components/QrScannerPage'
import Character from './components/Character'
import Quests from './components/Quests'
import Survey from './components/Survey'
import RootLayout from './components/RootLayout'

import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, loader: () => redirect('/character') },
      {
        path: 'character',
        element: <Character />,
      },
      {
        path: 'qr-scanner',
        element: <QrScannerPage />,
      },
      {
        path: 'quests',
        element: <Quests />,
      },
      {
        path: 'quests/survey',
        element: <Survey />,
      },
    ],
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
