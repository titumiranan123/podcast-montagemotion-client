import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './route/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div>
    <RouterProvider router={routes} />
  </div>
)
