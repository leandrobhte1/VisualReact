export const changeFluxo = (value) => {
    console.log("visual");
    return [{ type: 'FLUXO_CHANGED', payload: value }]
}