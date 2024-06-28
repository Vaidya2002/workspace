import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import PDFViewer from './PDFViewer';  // Adjust the file name and extension as needed



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PDFViewer/>
  </React.StrictMode>,
)
