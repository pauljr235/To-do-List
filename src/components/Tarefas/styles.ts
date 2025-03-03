import styled from 'styled-components'
import { cores } from '../../styles'

import * as enums from '../../utils/enums/Tarefa'

export type TagProps = {
  status?: enums.Status
  priority?: enums.Prioridade
  paramentro: 'status' | 'prioridade'
}

function MudancaDeCor(props: TagProps): string {
  if (props.paramentro === 'status') {
    if (props.status === enums.Status.PENDENTE) return cores.amarelo
    if (props.status === enums.Status.CONCLUIDA) return cores.verde
  } else {
    if (props.priority === enums.Prioridade.IMPORTANTE) return cores.laranja
    if (props.priority === enums.Prioridade.URGENTE) return cores.vermelho
  }
  return '#ccc' // Cor padrão caso não entre em nenhum caso
}

export const Card = styled.div`
  padding: 16px;
  background-color: ${cores.cinzaClaro};
  display: block;
  border-radius: 8px;
  border: 1px solid ${cores.grey};
  box-shadow: 0 2px 4px rgba(0, 0, 0.25);
  margin-bottom: 24px;

  li {
    list-style: none;
  }

  label {
    display: flex;
    align-items: center;
    padding-bottom: 14px;
  }
`

export const Titulo = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: ${cores.branco};
  font-size: 12px;
  font-weight: bold;
  background-color: ${(props) => MudancaDeCor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  line-height: 24px;
  font-weight: 400;
  font-size: 16px;
  color: ${cores.cinza};
  display: block;
  width: 100%;
  resize: none;
  margin-top: 16px;
  border: none;
  background-color: ${cores.cinzaClaro};
  margin-bottom: 16px;
`

export const BarraDeAcoes = styled.div`
  padding: 18px 0;
  border-top: 1px solid ${cores.blackWhite};
  width: 100%;
`
export const Button = styled.button`
  padding: 6px 12px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 8px;
  margin-right: 8px;
  color: ${cores.branco};
  background-color: ${cores.grafite};
  border: none;
`

export const ButtonCancelarERemover = styled(Button)`
  background-color: ${cores.vermelho};
`
export const ButtonSalvar = styled(Button)`
  background-color: ${cores.verde};
`
