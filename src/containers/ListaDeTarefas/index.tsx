import Tarefas from '../../components/Tarefas'
import { Container } from './styles'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <Container>
      <h4 style={{ padding: '40px' }}>
        2 tarefas marcadas como &quot;todas&ldquo; e &quot;termo&ldquo;
      </h4>
      <ul>
        {itens.map((item) => (
          <>
            <li key={item.title}>
              <Tarefas
                id={item.id}
                title={item.title}
                priority={item.priority}
                status={item.status}
                description={item.description}
              />
            </li>
          </>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
