import React from 'react'
import { useSelector } from 'react-redux';

import perguntas from '../perguntas/perguntas'


function GameOverPage(){

    const pontuacao = useSelector((state) => state.pontuacaoReducer)

    let acertou = 0

    for (let i = 0; i < pontuacao.length; i++) {

        if (pontuacao[i] === 'O') {
            
            acertou++
        }
    }



    function ErrouTudo(){
        return(
            <p>Você foi péssimo!</p>
        )
    }

    function ErrouMetade(){
        return(
            <p>Você se esforçou, mas... não chegou perto!</p>
        )
    }

    function AcertouQuaseTudo(){
        return(
            <p>Você foi ótimo!</p>
        )
    }

    function AcertouTudo(){
        return(
            <p>Você foi perfeito!</p>
        )
    }


    return(

        <div className='container-gameOver'>

            <p>Parabéns!</p>

            <p>Você completou o Quiz!</p>

            <p>Você acertou {acertou} de {perguntas.length} perguntas, fazendo então {acertou} pontos.
             Você precisava de {perguntas.length} pontos para ganhar, então...</p>

            {

                acertou === perguntas.length - perguntas.length  ? <ErrouTudo /> :
                acertou <= perguntas.length / 2 ? <ErrouMetade /> :
                acertou <= perguntas.length - 1 ? <AcertouQuaseTudo /> : <AcertouTudo />

            }

        </div>

    )
}


export default GameOverPage