const{getInitials,createSlug,average,isPalindrome} = require("./function")

//NOTE - snack-1

test('getInitials restituisce le iniziali di un nome completo',()=>{
    
    expect(getInitials('Daniele Consoli')).toBe('DC')

})

//NOTE - snack-2
test('La funzione createSlug restituisce una stringa in lowercase.',()=>{
    expect(createSlug("Ciao Sono daniele")).toBe('ciao-sono-daniele')
})

//NOTE - snack-3 

test('La funzione average calcola la media aritmetica di un array di numeri.',()=>{
    expect(average([15,5,5])).toBe(8)
    expect(()=>average([15,"ciaoMOndo"])).toThrow()
})

//NOTE - snack-4

test('La funzione createSlug restituisce una stringa in lowercase.',()=>{
    expect(createSlug("Ciao Sono daniele")).toBe('ciao-sono-daniele')
})

//NOTE - snack-5

test('La funzione isPalindrome verifica se una stringa è un palindromo.',()=>{
   
    expect(isPalindrome("anna")).toBeTruthy()
})

//NOTE - snack-6