const { getInitials,
    createSlug, 
    average, 
    isPalindrome, 
    findPostById,
    addPost,
    removePost
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
let posts;

beforeEach(() => {
    posts = [
        { id: 1, title: "amazon Post", slug: "amazon_post" },
        { id: 2, title: "alibaba post", slug: "alibaba_post" },
        { id: 3, title: "ebay Post", slug: "amazon_Post" }
    ]
})

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "alibaba post", slug: "alibaba_post" })
    expect(()=> findPostById("ciao", 2)).toThrow()
    expect(()=> findPostById(posts, "ciao")).toThrow()
    expect(()=> findPostById(posts, "10")).toThrow()
})


describe('Controlli slug',()=>{
    test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Ciao Sono daniele")).toBe('ciao-sono-daniele')
})
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Ciao Sono daniele")).toBe('ciao-sono-daniele')
})
test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug("")).toThrow()
});
})

describe('Controlli numerici',()=>{
    test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([15, 5, 5])).toBe(8)
    expect(() => average([15, "ciaoMOndo"])).toThrow()
})
})


describe('Controlli stringhe',()=>{
    
    test('getInitials restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Daniele Consoli')).toBe('DC')
})
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Ciao Sono daniele")).toBe('ciao-sono-daniele')
})
test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {

    expect(isPalindrome("anna")).toBeTruthy()
    expect(isPalindrome("anndsa")).toBeFalsy()
})
})

test('Dopo aver aggiunto un post con la funzione addPost, l array posts deve contenere un elemento in più.',()=>{
    expect(addPost(posts,{ id: 4, title: "alibaba postdfgdfg", slug: "alibaba_postdfgdfg" }).length).toBe(4)
})

test('Dopo aver rimosso un post con la funzione removePost, l array posts deve contenere un elemento in meno.',()=>{
    expect(removePost( posts , 2 ).length).toBe(2)
})

describe('Test posts',()=>{
test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "alibaba post", slug: "alibaba_post" })
    expect(()=> findPostById("ciao", 2)).toThrow()
    expect(()=> findPostById(posts, "ciao")).toThrow()
    expect(()=> findPostById(posts, "10")).toThrow()
})

test('Dopo aver aggiunto un post con la funzione addPost, l array posts deve contenere un elemento in più.',()=>{
    expect(addPost(posts,{ id: 4, title: "alibaba postdfdsf", slug: "alibaba_postsdfs" }).length).toBe(4)
})

test('Dopo aver rimosso un post con la funzione removePost, l array posts deve contenere un elemento in meno.',()=>{
    expect(removePost( posts , 2 ).length).toBe(2)
})
test('Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore',()=>{
    expect(()=>addPost(posts,{ id: 1, title: "amazon Post", slug: "amazon_post" })).toThrow()
})
})
