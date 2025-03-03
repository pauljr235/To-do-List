import { useDispatch, useSelector } from 'react-redux'
import FiltroCards from '../../components/FiltroCard'
import { Busca, Container, FiltroContainer } from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtros'

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
        <FiltroCards contador={3} legenda={'pendentes'} />
        <FiltroCards contador={4} legenda={'concluídas'} />
        <FiltroCards contador={2} legenda={'urgentes'} />
        <FiltroCards contador={2} legenda={'importantes'} />
        <FiltroCards contador={3} legenda={'normal'} />
        <FiltroCards contador={7} legenda={'todas'} ativo />
      </FiltroContainer>
    </Container>
  )
}

export default BarraLateral
