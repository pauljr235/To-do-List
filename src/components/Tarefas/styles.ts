import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  padding: 16px;
  background-color: ${cores.cinzaClaro};
  display: block;
  border-radius: 8px;
  border: 1px solid ${cores.grey};
  box-shadow: 0 2px 4px rgba(0, 0, 0.25);
  li {
    list-style: none;
  }
`

export const Titulo = styled.h3`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 14px;
`

export const Tag = styled.span`
  padding: 4px 8px;
  color: ${cores.branco};
  font-size: 12px;
  font-weight: bold;
  background-color: ${cores.vermelho};
  border-radius: 8px;
  margin-right: 8px;
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
`
