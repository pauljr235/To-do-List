import { Link } from 'react-router-dom'
import { Cicle } from './styles'

const BotaoAdicionar = () => {
  return (
    <Link to={'/novo'}>
      <Cicle href="">+</Cicle>
    </Link>
  )
}

export default BotaoAdicionar
