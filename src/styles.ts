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

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const Busca = styled.input`
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.cinza};
  border: 1px solid ${cores.cinza};
  width: 100%;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${cores.azul};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${cores.verde};
`

export default EstiloGlobal
