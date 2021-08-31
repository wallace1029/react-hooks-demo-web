import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {Provider} from 'react-redux'
import store from './store'
import routes from './routes'

function App() {
  return (
    <Router>
      <Provider store={store}>
        {renderRoutes(routes)}
      </Provider>
    </Router>
  )
}

export default App
