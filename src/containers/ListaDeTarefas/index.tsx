import Tarefas from '../../components/Tarefas'
import { Container, MainContainer, Titulo } from '../../styles'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.title.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.priority === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }
  return (
    <MainContainer>
      <Titulo as="p" style={{ padding: '40px' }}>
        2 tarefas marcadas como &quot;todas&ldquo; e &quot;{termo}&ldquo;
      </Titulo>
      <ul style={{ listStyle: 'none' }}>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul style={{ listStyle: 'none' }}>
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
    </MainContainer>
  )
}

export default ListaDeTarefas
