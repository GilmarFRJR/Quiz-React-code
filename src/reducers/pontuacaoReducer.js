export default function definirPontuacao(state = [], action) {

    switch (action.type) {

        case 'ACERTOU': return [...state, action.payload]

        case 'ERROU': return [...state, action.payload]
    
        default:
            return state
    }

}