import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  cinza: '#5E5E5E',
  grey: '#EEEEEE',
  azul: '#1E90FF',
  branco: '#fff',
  blackWhite: '#0000001A',
  vermelho: '#C23616',
  grafite: '#2F3640',
  laranja: '#E1A32A',
  amarelo: '#F0C11A',
  cinzaClaro: '#FCFCFC',
  verde: '#44BD32'
}

export const GlobalCss = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
`

export const Containers = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
