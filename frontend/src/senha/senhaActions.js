export const changeFluxo = (value) => {
    return [{ type: 'FLUXO_CHANGED', payload: value }]
}

export const nextTicket = (value) => {
    return [{ type: 'TICKET_CHANGED', payload: value }]
}

export const changeSenha = (value) => {
    return [{ type: 'FILA_CHANGED', payload: value }]
}

let lista = [];

export const insertSenhaList = (array) => {

    lista.push(array);

    
    console.log("lista.: ",lista);
    return [{ type: 'SENHAS_FILA_CHANGED', payload: lista }]
}

export const finalizaSenhaList = (item) => {

    console.log("ki.: ", item);

    let indice = item - 1;

    console.log("lista length.: ", lista);
    
    lista.slice(indice, 1);
    
    console.log("lista.: ",lista);
    return [{ type: 'SENHAS_FILA_CHANGED', payload: lista }]
}