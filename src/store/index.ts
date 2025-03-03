import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from '../store/reducers/tarefas'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
