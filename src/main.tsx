import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app/App'
import {BrowserRouter,HashRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter basename={'/wg-server-admin'}>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
