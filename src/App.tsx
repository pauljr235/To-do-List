import { Provider } from 'react-redux'

import { Containers, GlobalCss } from './styles'
import store from './store'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <h1>Nova tarega</h1>
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <Containers>
        <RouterProvider router={rotas} />
      </Containers>
    </Provider>
  )
}

export default App
