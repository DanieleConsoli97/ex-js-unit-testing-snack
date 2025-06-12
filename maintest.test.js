const { getInitials,
    createSlug, 
    average, 
    isPalindrome, 
    findPostById 
} = require("./function")

//NOTE - snack-1

test('getInitials restituisce le iniziali di un nome completo', () => {

    expect(getInitials('Daniele Consoli')).toBe('DC')

})

//NOTE - snack-2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Ciao Sono daniele")).toBe('ciao-sono-daniele')
})

//NOTE - snack-3 

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([15, 5, 5])).toBe(8)
    expect(() => average([15, "ciaoMOndo"])).toThrow()
})

//NOTE - snack-4

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Ciao Sono daniele")).toBe('ciao-sono-daniele')
})

//NOTE - snack-5

test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {

    expect(isPalindrome("anna")).toBeTruthy()
    expect(isPalindrome("anndsa")).toBeFalsy()
})

//NOTE - snack-6

test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug("")).toThrow()
});

//NOTE - snack-7
let posts

beforeEach(() => {
    posts = [
        { id: 1, title: "amazon Post", slug: "amazon_post" },
        { id: 2, title: "alibaba post", slug: "alibaba_post" },
        { id: 3, title: "ebay Post", slug: "amazon_Post" }
    ]
})

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "alibaba post", slug: "alibaba_post" })
})

