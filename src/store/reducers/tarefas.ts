import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      new Tarefa(
        'Estudar JS',
        enums.Prioridade.IMPORTANTE,
        enums.Status.PENDENTE,
        '',
        1
      ),
      new Tarefa(
        'Estudar Typescript',
        enums.Prioridade.URGENTE,
        enums.Status.CONCLUIDA,
        'Estudar via módulo EBAC',
        2
      ),
      new Tarefa(
        'Estudar UseEffect',
        enums.Prioridade.URGENTE,
        enums.Status.PENDENTE,
        'Pesquisar conteúdo no material de apoio',
        3
      )
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
