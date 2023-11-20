import { React } from 'react'

import QrScannerPage from './components/QrScannerPage'
import Home from './components/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'qr-scanner',
        element: <QrScannerPage />,
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
