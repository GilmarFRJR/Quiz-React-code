import React, {  useState  } from 'react'
import { useDispatch } from 'react-redux';

import { actions } from '../actions/actions';


function HomePage(){

  const [sumir, setSumir] = useState(false)

  const dispatch = useDispatch()


 function sumirComponente(){
  
  setSumir(true)

 }


  function comecar(){

    sumirComponente()

    setTimeout(() => {
      dispatch(actions.mudarComponente1);
    }, 500)

  }

    
    return(

        <div className={`container-pai ${sumir ? 'sumir' : ''}`}>

          <div id='container-texto'>
            
            <h1>BEM VINDO AO QUIZ DE CONHECIMENTOS GERAIS!</h1>
            <h2>Você será testato com PP perguntas de conhecimentos gerais, cada uma com 4 alternativas de respostas, e ao final do Quiz você verá sua
                pontuação. <br/><br/> 
                Durante o Quiz você terá acesso a 3 mecânicas únicas para facilitar sua vida, sendo elas:
            </h2>


            <ul>

               <li>PULAR: Você pula a pergunta atual, e fica como se você tivesse acertado a resposta</li>

               <li>METADINHA: Você excluí 2 das 4 respostas, sobrando então uma resposta certa e uma errada ao invés de 3</li>

               <li>1/4: Você excluí 1 das 4 respostas, sobrando então 1 resposta certa e 2 erradas ao invés de 3</li>

            </ul>


            <p>OBS: Você só pode usar essas mecanicâs UMA VEZ, então use com sabedoria.</p>


            <button onClick={ comecar }>Começar Quiz!</button>

          </div>


          <div id='container-imagem'></div>



        </div>

    )
}


export default HomePage