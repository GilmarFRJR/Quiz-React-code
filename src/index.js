import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import Quiz from './componentes/Quiz'

import pontuacaoReducer from './reducers/pontuacaoReducer'
import componenteReducer from './reducers/componenteReducer';
import numeroPergunta from './reducers/perguntaReducer'

import './style/homePage.css'
import './style/perguntaPage.css'
import './style/gameOverPage.css'
import './style/transicao.css'


const rootReducer = combineReducers({
  pontuacaoReducer: pontuacaoReducer,
  componenteReducer: componenteReducer,
  numeroPergunta: numeroPergunta
})

const store = configureStore({
  reducer: rootReducer
})


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <React.StrictMode>

    <Provider store={store}>

      <Quiz />

    </Provider>

  </React.StrictMode>

);

