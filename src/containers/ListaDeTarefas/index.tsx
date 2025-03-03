import Tarefas from '../../components/Tarefas'
import { Container } from './styles'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.title.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
    )
  }
  return (
    <Container>
      <h4 style={{ padding: '40px' }}>
        2 tarefas marcadas como &quot;todas&ldquo; e &quot;{termo}&ldquo;
      </h4>
      <ul>
        {filtraTarefas().map((item) => (
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
