import { useDispatch, useSelector } from 'react-redux'
import FiltroCards from '../../components/FiltroCard'
import { Busca, Container, FiltroContainer } from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtros'
import * as enums from '../../utils/enums/Tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Container>
      <Busca
        type="text"
        placeholder="Procurar"
        value={termo}
        onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
      />
      <FiltroContainer>
        <FiltroCards
          valor={enums.Status.PENDENTE}
          criterio="status"
          legenda={'pendentes'}
        />
        <FiltroCards
          valor={enums.Status.CONCLUIDA}
          criterio="status"
          legenda={'concluídas'}
        />
        <FiltroCards
          valor={enums.Prioridade.URGENTE}
          criterio="prioridade"
          legenda={'urgentes'}
        />
        <FiltroCards
          valor={enums.Prioridade.IMPORTANTE}
          criterio="prioridade"
          legenda={'importantes'}
        />
        <FiltroCards
          valor={enums.Prioridade.IMPORTANTE}
          criterio="prioridade"
          legenda={'normal'}
        />
        <FiltroCards criterio="todas" legenda={'todas'} />
      </FiltroContainer>
    </Container>
  )
}

export default BarraLateral
