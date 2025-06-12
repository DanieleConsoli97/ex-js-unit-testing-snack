const getInitials = (nomeCompleto) => {
    const nomeSeparato = nomeCompleto.split(" ")
    console.log(nomeSeparato)
    return `${nomeSeparato[0].charAt(0).toUpperCase()}${nomeSeparato[1].charAt(0).toUpperCase()}`
}
const createSlug = (string) => {
    if (!string) {
        throw new Error("Il titolo non può essere vuoto");
    }

    return string.replaceAll(" ", "-").toLowerCase()
}

const average = (arrNum) => {

    arrNum.forEach(numero => {
        if (isNaN(numero)) {
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
const isPalindrome = (string) => {
    const reversedString = string.split("").reverse().join("")
    return reversedString === string ? true : false
}

const findPostById = (arr, id) => {
    if (!Array.isArray(arr)) {
        throw new Error('La funzione accetta solo array come primo argomento')
    }
    if (typeof id !== "number" || isNaN(id)) {
        throw new Error('La funzione accetta solo un numero come secondo argomento')
    }

    return arr.find((post) => post.id === id)
}
const addPost = (arr, post) => {
    
    if (arr.some((element) => {return   element.id === post.id ||element.slug === post.slug ||element.title === post.title})) {
        throw new Error("Post già esistente");
    }
    return [...arr, post]
}

const removePost = (arr, id) => {
    return arr.filter(post => post.id != id)
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById,
    addPost,
    removePost
}