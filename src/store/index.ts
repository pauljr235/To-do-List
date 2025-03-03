import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from '../store/reducers/tarefas'
import filtroReducer from '../store/reducers/filtros'
const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
