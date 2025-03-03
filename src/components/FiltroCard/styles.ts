import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  ativo?: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  background-color: ${cores.branco};
  color: ${(props) => (props.ativo ? cores.azul : cores.cinza)};
  border: solid 1px ${(props) => (props.ativo ? cores.azul : cores.cinza)};
  border-radius: 8px;
  display: block;
  cursor: pointer;
`

export const Contador = styled.div`
  font-size: 24px;
  font-weight: bold;
`

export const Status = styled.div`
  font-size: 14px;
  font-weight: 400;
`
