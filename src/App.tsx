import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import { Containers, GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Containers>
        <BarraLateral />
        <ListaDeTarefas />
      </Containers>
    </>
  )
}

export default App
