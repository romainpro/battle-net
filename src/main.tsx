import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='bg-background-900'>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>
)
