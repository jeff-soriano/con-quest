import { useState } from 'react'
import { QrScanner } from '@yudiel/react-qr-scanner'
import { useOutletContext } from 'react-router-dom'

import Button from '@mui/material/Button'

const QrScannerPage = () => {
  const [result, setResult] = useState(null)
  const [setExp] = useOutletContext()

  const addExp = () => setExp((xp) => (xp < 100 ? xp + 20 : xp))

  const onDecode = (result) => {
    setResult(result)
    console.log(result)
    addExp()
  }

  const qrScanner = () => (
    <div>
      <QrScanner
        viewFinder={() => (
          <svg
            viewBox="0 0 100 100"
            style={{
              top: '0px',
              left: '0px',
              zIndex: 1,
              boxSizing: 'border-box',
              border: '20px solid rgba(0, 0, 0, 0.1)',
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          >
            <path
              fill="none"
              d="M23,0 L0,0 L0,23"
              stroke="rgba(125, 125, 255, 0.5)"
              strokeWidth="5"
            ></path>
            <path
              fill="none"
              d="M0,77 L0,100 L23,100"
              stroke="rgba(125, 125, 255, 0.5)"
              strokeWidth="5"
            ></path>
            <path
              fill="none"
              d="M77,100 L100,100 L100,77"
              stroke="rgba(125, 125, 255, 0.5)"
              strokeWidth="5"
            ></path>
            <path
              fill="none"
              d="M100,23 L100,0 77,0"
              stroke="rgba(125, 125, 255, 0.5)"
              strokeWidth="5"
            ></path>
          </svg>
        )}
        onDecode={onDecode}
        onError={(error) => console.log(error?.message)}
      />
      <Button
        style={{ marginTop: '20px' }}
        onClick={() => onDecode('test')}
        variant="contained"
      >
        QR code scanned
      </Button>
    </div>
  )

  const successfulScan = () => (
    <div>
      <p>You received 20xp!</p>
      <Button onClick={() => setResult(null)} variant="contained">
        New scan
      </Button>
    </div>
  )

  return (
    <div
      style={{
        width: '90%',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      {result ? successfulScan() : qrScanner()}
    </div>
  )
}

export default QrScannerPage
