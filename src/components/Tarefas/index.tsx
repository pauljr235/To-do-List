import { BarraDeAcoes, Button, Card, Descricao, Tag, Titulo } from './styles'

const Tarefas = () => (
  <Card>
    <Titulo>Estudar programação</Titulo>
    <Tag>importante</Tag>
    <Tag>importante</Tag>
    <Descricao />
    <BarraDeAcoes>
      <Button type="button">Editar</Button>
      <Button type="button">Remover</Button>
    </BarraDeAcoes>
  </Card>
)

export default Tarefas
