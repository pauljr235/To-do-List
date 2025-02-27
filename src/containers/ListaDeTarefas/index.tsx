import Tarefas from '../../components/Tarefas'
import { Container } from './styles'

const ListaDeTarefas = () => (
  <Container>
    <h4 style={{ padding: '40px' }}>
      2 tarefas marcadas como &quot;todas&ldquo; e &quot;termo&ldquo;
    </h4>
    <ul>
      <li>
        <Tarefas />
      </li>
    </ul>
    <li>
      <Tarefas />
    </li>
    <li>
      <Tarefas />
    </li>
    <li>
      <Tarefas />
    </li>
    <li>
      <Tarefas />
    </li>
    <li>
      <Tarefas />
    </li>
  </Container>
)

export default ListaDeTarefas
