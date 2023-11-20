import { QrScanner } from '@yudiel/react-qr-scanner'

const QrScannerPage = () => {
  return (
    <QrScanner
      containerStyle={{ maxHeight: '100vh' }}
      onDecode={(result) => console.log(result)}
      onError={(error) => console.log(error?.message)}
    />
  )
}

export default QrScannerPage
