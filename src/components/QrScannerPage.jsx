import { useState } from 'react'
import { QrScanner } from '@yudiel/react-qr-scanner'

const QrScannerPage = () => {
  const [result, setResult] = useState(null)
  return (
    <div
      style={{
        marginTop: '25%',
      }}
    >
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
        onDecode={(result) => {
          setResult(result)
          console.log(result)
        }}
        onError={(error) => console.log(error?.message)}
      />
      {result && <p>{result}</p>}
    </div>
  )
}

export default QrScannerPage
