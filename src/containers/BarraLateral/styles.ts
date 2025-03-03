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
