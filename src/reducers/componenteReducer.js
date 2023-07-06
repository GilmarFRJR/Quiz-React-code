export default function mostrarComponente(state = '', action) {

    switch (action.type) {

        case 'PerguntaPage': return state = action.payload

        case 'GameOverPage': return state = action.payload
    
        default:
            return state
    }

}