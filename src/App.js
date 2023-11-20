import QrScannerPage from './components/QrScannerPage'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="qr-scanner">Qr Scanner</Link>
      </div>
    ),
  },
  {
    path: 'qr-scanner',
    element: <QrScannerPage />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
