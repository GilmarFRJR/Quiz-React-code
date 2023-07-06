export default function mostrarPergunta(state = 0, action) {

    switch (action.type) {

        case 'proximaPergunta': return state + 1
    
        default:
            return state
    }

}