import React, {  useEffect, useState  } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import perguntas from '../perguntas/perguntas'
import { actions } from '../actions/actions';



function PerguntaPage(){

    const [aparecer, setAparecer] = useState(false)
    const [respostasEmbaralhadas, setRespostasEmbaralhadas] = useState([])
    const [usado1, setUsado1] = useState(false)
    const [usado2, setUsado2] = useState(false)
    const [usado3, setUsado3] = useState(false)


    useEffect(() => {

      setAparecer(true)

    }, [])


    const numeroPergunta = useSelector((state) => state.numeroPergunta)
    const dispatch = useDispatch()
  
    function embaralharRespostas(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = newArray[i];
          newArray[i] = newArray[j];
          newArray[j] = temp;
        }
        return newArray;
      }
      

      const { pergunta, respostaCerta, respostaErrada1, respostaErrada2, respostaErrada3 } = perguntas[numeroPergunta]

      const varRespostasEmbaralhadas = embaralharRespostas([respostaCerta, respostaErrada1, respostaErrada2, respostaErrada3])

      useEffect(() => {

        setRespostasEmbaralhadas(varRespostasEmbaralhadas)

      }, [numeroPergunta])


      
   

      function pularPergunta(){

        if (!usado1){
          dispatch(actions.proximaPergunta)
          dispatch(actions.acertou)
          setUsado1(true)

          if (numeroPergunta + 1 === perguntas.length){
            dispatch(actions.mudarComponente2)
        }

        } else return

      }


      function metadinha(){

       if (!usado2){
         const varRespostasEmbaralhadas = embaralharRespostas([respostaCerta, respostaErrada1])
         setRespostasEmbaralhadas(varRespostasEmbaralhadas)
         setUsado2(true)
       } else return
        
      }


      function umQuarto(){

        if (!usado3){
          const varRespostasEmbaralhadas = embaralharRespostas([respostaCerta, respostaErrada1, respostaErrada2])
          setRespostasEmbaralhadas(varRespostasEmbaralhadas)
          setUsado3(true)
        } else return
         
       }


      function proximaPergunta(resposta){

        dispatch(actions.proximaPergunta)

        if (resposta === respostaCerta){
            dispatch(actions.acertou)
        } else{
            dispatch(actions.errou)
        }

        if (numeroPergunta + 1 === perguntas.length){
            dispatch(actions.mudarComponente2)
        }

      }


    return(

        <div className={`container-pai-perguntaPage ${aparecer ? 'aparecer' : ''}`}>

            <div className='progressoPerguntas'>

               <p>{numeroPergunta + 1} de {perguntas.length}</p>

            </div>


            <div className='container-titulo-mecanicas'>

              <h1>{pergunta}</h1>

              <div className='container-botoes'>

                 <button className={usado1 ? 'usado' : ''} onClick={() => {pularPergunta()} }>Pular</button>

                 <button className={usado2 ? 'usado' : ''} onClick={ () => {metadinha()} }>Metadinha</button>

                 <button className={usado3 ? 'usado' : ''} onClick={ () => {umQuarto()} }>1/4</button>

              </div>

            </div>


            <div className='container-respostas'>

                {

                   respostasEmbaralhadas.map((resposta) => {

                     return <p onClick={ () => { proximaPergunta(resposta) } } className='pergunta'>{resposta}</p>

                   })

                }


            </div>
         

        </div>

    )
}


export default PerguntaPage