const getInitials = (nomeCompleto) => {
    const nomeSeparato = nomeCompleto.split(" ")
    console.log(nomeSeparato)
    return `${nomeSeparato[0].charAt(0).toUpperCase()}${nomeSeparato[1].charAt(0).toUpperCase()}`
}
const createSlug = (string) => {
    return string.toLowerCase()
}

const average = (arrNum) => {
    
    arrNum.forEach(numero => {
        if(isNaN(numero)){
            throw new Error("Average accetta solo numeri") 
        }
    });

    const sum = arrNum.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    return parseInt(sum / arrNum.length)

}
module.exports = { getInitials, createSlug, average }