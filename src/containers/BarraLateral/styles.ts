import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  padding: 8px;
  background-color: ${cores.grey};
  height: 100vh;
  input {
    border-radius: 8px;
    padding: 6px;
  }
`

export const FiltroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  margin-top: 16px;
`
export const Busca = styled.input`
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.cinza};
  border: 1px solid ${cores.cinza};
`
