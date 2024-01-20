import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Application from './Application.tsx'
import configuration from './configuration.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={configuration.app.basename}>
      <Application />
    </BrowserRouter>
  </React.StrictMode>,
)
