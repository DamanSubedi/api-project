import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './services/store.js'

const Root = document.getElementById("root")

ReactDOM.createRoot(Root).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
