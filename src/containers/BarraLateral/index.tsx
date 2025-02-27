import FiltroCards from '../../components/FiltroCard'
import { Busca, Container, FiltroContainer } from './styles'

const BarraLateral = () => (
  <Container>
    <Busca type="text" placeholder="Procurar" />
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

export default BarraLateral
