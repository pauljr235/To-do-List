import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  background-color: ${cores.branco};
  color: ${(props) => (props.ativo ? cores.azul : cores.cinza)};
  border: solid 1px ${(props) => (props.ativo ? cores.azul : cores.cinza)};
  border-radius: 8px;
  display: block;
`

export const Contador = styled.div`
  font-size: 24px;
  font-weight: bold;
`

export const Status = styled.div`
  font-size: 14px;
  font-weight: 400;
`
