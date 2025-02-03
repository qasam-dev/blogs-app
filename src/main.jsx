import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import { store } from './store/store.js'
import { Provider } from "react-redux"
import { RouterProvider } from 'react-router'
import { routeConfig } from './routes/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routeConfig} />
    </Provider>
  </StrictMode>,
)
