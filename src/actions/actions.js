export const actions = {
    
    acertou: {
        type: "ACERTOU",
        payload: "O"
    },

    errou: {
        type: "ERROU",
        payload: "X"
    },

    mudarComponente1: {
        type: "PerguntaPage",
        payload: "PerguntaPage"
    },
    
    mudarComponente2: {
        type: "GameOverPage",
        payload: "GameOverPage"
    },

    proximaPergunta: {
        type: "proximaPergunta"
    }

}