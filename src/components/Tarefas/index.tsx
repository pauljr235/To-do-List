import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as enums from '../../utils/enums/Tarefa'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'

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

export type PropsTarefas = {
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

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <Card>
      <label htmlFor={title}>
        <input
          checked={status === enums.Status.CONCLUIDA}
          type="checkbox"
          id={title}
          onChange={alteraStatusTarefa}
        />
        <Titulo>
          {estaEditando ? <em>Editando...</em> : ''}
          {title}
        </Titulo>
      </label>

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
