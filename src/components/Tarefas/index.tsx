import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as enums from '../../utils/enums/Tarefa'
import { remover } from '../../store/reducers/tarefas'

import {
  BarraDeAcoes,
  Button,
  ButtonCancelarERemover,
  ButtonSalvar,
  Card,
  Descricao,
  Tag,
  Titulo
} from './styles'

type PropsTarefas = {
  title: string
  priority: enums.Prioridade
  status: enums.Status
  description: string
  id: number
}

const Tarefas = ({
  title,
  priority,
  status,
  description: originalDescription,
  id
}: PropsTarefas) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  return (
    <Card>
      <Titulo>{title}</Titulo>
      <Tag paramentro="prioridade" priority={priority}>
        {priority}
      </Tag>
      <Tag paramentro="status" status={status}>
        {status}
      </Tag>
      <Descricao
        disabled={!estaEditando}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <BarraDeAcoes>
        {estaEditando ? (
          <>
            <ButtonSalvar type="button">Salvar</ButtonSalvar>
            <ButtonCancelarERemover
              onClick={() => {
                setEstaEditando(false)
                setDescription(originalDescription)
              }}
              type="button"
            >
              Cancelar
            </ButtonCancelarERemover>
          </>
        ) : (
          <>
            <Button onClick={() => setEstaEditando(true)} type="button">
              Editar
            </Button>
            <ButtonCancelarERemover
              onClick={() => dispatch(remover(id))}
              type="button"
            >
              Remover
            </ButtonCancelarERemover>
          </>
        )}
      </BarraDeAcoes>
    </Card>
  )
}

export default Tarefas
