import React from 'react'
import { useSelector } from 'react-redux';

import HomePage from './HomePage'
import PerguntaPage from './PerguntaPage'
import GameOverPage from './GameOverPage'




function Quiz(){

    const mostrarComponente = useSelector((state) => state.componenteReducer)


    return(

        <div>

          {mostrarComponente === 'PerguntaPage' ? (
            <PerguntaPage />
          ) : mostrarComponente === 'GameOverPage' ? (
            <GameOverPage />
          ) : (
            <HomePage />
          )}

      </div>
    
    )

}


export default Quiz