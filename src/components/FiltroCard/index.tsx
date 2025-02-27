import { Card, Contador, Status } from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroCards = ({ ativo, contador, legenda }: Props) => (
  <Card ativo={ativo}>
    <Contador>{contador}</Contador>
    <Status>{legenda}</Status>
  </Card>
)

export default FiltroCards
