import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as enums from '../../utils/enums/Tarefa'
import { remover, editar } from '../../store/reducers/tarefas'

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

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescription(originalDescription)
  }

  function removerItem() {
    dispatch(remover(id))
  }

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
            <ButtonSalvar
              onClick={() => {
                dispatch(
                  editar({
                    description,
                    priority,
                    status,
                    title,
                    id
                  })
                )
                setEstaEditando(false)
              }}
              type="button"
            >
              Salvar
            </ButtonSalvar>
            <ButtonCancelarERemover onClick={cancelarEdicao} type="button">
              Cancelar
            </ButtonCancelarERemover>
          </>
        ) : (
          <>
            <Button onClick={() => setEstaEditando(true)} type="button">
              Editar
            </Button>
            <ButtonCancelarERemover onClick={removerItem} type="button">
              Remover
            </ButtonCancelarERemover>
          </>
        )}
      </BarraDeAcoes>
    </Card>
  )
}

export default Tarefas
