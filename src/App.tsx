import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import { Containers, GlobalCss } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <Containers>
        <BarraLateral />
        <ListaDeTarefas />
      </Containers>
    </Provider>
  )
}

export default App
