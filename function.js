const getInitials = (nomeCompleto) => {
    const nomeSeparato = nomeCompleto.split(" ")
    console.log(nomeSeparato)
    return `${nomeSeparato[0].charAt(0).toUpperCase()}${nomeSeparato[1].charAt(0).toUpperCase()}`
}
const createSlug = (string) => {
    return string.replaceAll(" ","-").toLowerCase()
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

//NOTE - split("") ritorna un array di lettere separate
//NOTE - reverse() ritorna un array invertito
//NOTE - join("") uniamo tutto con join diamo "" senza spazio per unire tutto senza divisori ne spazi
const isPalindrome= (string)=>{
    const reversedString = string.split("").reverse().join("")
    return reversedString===string ? true : false
}

module.exports = { getInitials, createSlug, average,isPalindrome}