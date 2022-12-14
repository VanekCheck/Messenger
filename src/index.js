import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

// styles
import './assets/index.css'

// App component
import App from './App'

// store
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
